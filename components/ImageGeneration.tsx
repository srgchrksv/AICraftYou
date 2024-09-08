import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import styles from "@/styles/IndexStyles";
import Stability from "@/components/Stability";

interface ImageGenerationProps {
  apiKey: string;
  image: string;
  selected: string;
  generatedImage: string;
  setGeneratedImage: React.Dispatch<React.SetStateAction<string>>;
}

const ImageGeneration: React.FC<ImageGenerationProps> = ({
  apiKey,
  image,
  selected,
  generatedImage,
  setGeneratedImage,
}) => {
  return (
    <>
      {image && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="defaultSemiBold">Step 3:</ThemedText>
          <ThemedText type="subtitle" style={styles.stepText}>
            Add stability.ai magic to your {selected} 
          </ThemedText>
          <Stability
            apiKey={apiKey}
            image={image}
            typeToGenerate={selected}
            generatedImage={generatedImage}
            setGeneratedImage={setGeneratedImage}
          />
        </ThemedView>
      )}
    </>
  );
};

export default ImageGeneration;
