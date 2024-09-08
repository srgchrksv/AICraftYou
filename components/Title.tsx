import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import styles from "@/styles/IndexStyles";

interface TitleProps {
  screenWidth: number;
}

const Title: React.FC<TitleProps> = ({ screenWidth }) => {
  return (
    <>
      <ThemedView style={styles.stepContainer}>
        <ThemedText
          type="title"
          style={{
            textAlign: "center",
            // borderBottomColor: 'black',
            // borderBottomWidth: 1,
            // borderStyle: 'dashed',
            // width: screenWidth
          }}
        >
          AICraftYou
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText
          type="subtitle"
          style={{
            textAlign: "center",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            borderStyle: "solid",
            width: screenWidth,
          }}
        >
          {" "}
          🧸 🎂 🎁 🦖 ✨ 🚀 🦄 🍬 🎡{" "}
        </ThemedText>
      </ThemedView>
    </>
  );
};

export default Title;
