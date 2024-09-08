import React from "react";
import { View, Image, Text } from "react-native";
import Confetti from "./Confetti"; 
import styles from "@/styles/IndexStyles";

interface CongratulationProps {
  isOrdered: boolean;
  selected: string;
  generatedImage: string;
  screenWidth: number;
}

const Congratulation: React.FC<CongratulationProps> = ({
  isOrdered,
  selected,
  generatedImage,
  screenWidth,
}) => {
  return (
    <>
      {isOrdered && (
        <View style={styles.stepContainer}>
          <Image
            source={{ uri: generatedImage }}
            style={{ width: screenWidth * 0.9, height: screenWidth * 0.9 }}
          />
          <Text
            style={{
              textAlign: "center",
              color: "lime",
              textShadowColor: "yellow",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 4,
            }}
          >
            {`Congratulations, your awesome crafted ${selected} is on the way 😁`}
          </Text>
          <Confetti />
        </View>
      )}
    </>
  );
};

export default Congratulation;
