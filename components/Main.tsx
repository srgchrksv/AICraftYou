import React, { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import styles from "@/styles/IndexStyles";
import { Image, Pressable } from "react-native";

interface Main {
  setIsMain: React.Dispatch<React.SetStateAction<boolean>>;
  mainMessage: string;
  setMainMessage: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setBilling: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setIsOrdered: React.Dispatch<React.SetStateAction<boolean>>;
  isOrdered: boolean;
  screenWidth: number;
}

const Main: React.FC<Main> = ({
  mainMessage,
  setIsMain,
  setMainMessage,
  setMessage,
  setImage,
  setBilling,
  setSelected,
  setIsOrdered,
  isOrdered,
  screenWidth,
}) => {
  const beginCraftingText = "Start";
  const startOverText = "Click here to start over";

  return (
    <>
      <ThemedView style={styles.stepContainer}>
        <Pressable
          onPress={() => {
            if (mainMessage === beginCraftingText) {
              setIsMain(false);
              setMainMessage(startOverText);
              setMessage("");
            } else {
              setIsMain(true);
              setMainMessage(beginCraftingText);
              setIsOrdered(false)
              setImage("");
              setSelected("");
              setMessage("");
              setBilling(false);
            }
          }}
          style={({ pressed }) => [
            styles.beginCrafting,
            (pressed || mainMessage === startOverText) &&
              styles.mainMessageSelected,
          ]}
        >
          <ThemedText
            type="default"
            style={{ fontSize: mainMessage != startOverText ? 23 : 15 }}
          >
            {mainMessage}
          </ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("@/assets/sketch.jpeg")}
          style={{
            transform: [{ rotate: "345deg" }],
            width: screenWidth * 0.4,
            height: screenWidth * 0.4,
          }}
        />
        <Image
          source={require("@/assets/toy.png")}
          style={{
            transform: [{ rotate: "15deg" }],
            width: screenWidth * 0.4,
            height: screenWidth * 0.4,
          }}
        />
      </ThemedView>

      {!isOrdered && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="defaultSemiBold">
            Use it to superpower your creatives
          </ThemedText>
          <ThemedText>Bring your sketch to life</ThemedText>
        </ThemedView>
      )}
    </>
  );
};

export default Main;
