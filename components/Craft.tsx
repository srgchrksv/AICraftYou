import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import styles from "@/styles/IndexStyles";
import { Pressable } from "react-native";

interface CraftProps {
  isMain: boolean;
  isOrdered: boolean;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const Craft: React.FC<CraftProps> = ({
  isMain,
  isOrdered,
  selected,
  setSelected,
  setImage,
}) => {
  return (
    !isMain &&
    !isOrdered && (
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Follow the steps:</ThemedText>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="defaultSemiBold">Step 1:</ThemedText>
          <ThemedText type="subtitle" style={styles.stepText}>
            What to craft?
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.container}>
          <Pressable
            onPress={() => {
              if (selected !== "TOY") {
                setSelected("TOY");
              } else {
                setSelected("");
                setImage("");
              }
            }}
            style={({ pressed }) => [
              styles.choice,
              (pressed || selected === "TOY") && styles.choiceSelected,
            ]}
          >
            <ThemedText type="default">TOY</ThemedText>
          </Pressable>
          <Pressable
            onPress={() => {
              if (selected !== "CAKE") {
                setSelected("CAKE");
              } else {
                setSelected("");
                setImage("");
              }
            }}
            style={({ pressed }) => [
              styles.choice,
              (pressed || selected === "CAKE") && styles.choiceSelected,
            ]}
          >
            <ThemedText type="default">CAKE</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    )
  );
};

export default Craft;
