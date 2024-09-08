import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import styles from "@/styles/IndexStyles";
import Camera from "@/components/Camera";

export interface ImagesProps {
  selected: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
}

const Images: React.FC<ImagesProps> = ({ selected, setImage, image }) => {
  return (
    <>
      {selected && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="defaultSemiBold">Step 2: </ThemedText>
          <ThemedText type="subtitle" style={styles.stepText}>
            Create your dream {selected} sketch and then take a picture or
            upload it:
          </ThemedText>
          <Camera setImage={setImage} image={image} />
        </ThemedView>
      )}
    </>
  );
};

export default Images;
