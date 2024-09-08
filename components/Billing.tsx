import React from "react";
import { Button } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import styles from "@/styles/IndexStyles";

interface BillingProps {
  billing: boolean;
  selected: string;
  isOrdered: boolean;
  setIsOrdered: React.Dispatch<React.SetStateAction<boolean>>;
  setBilling: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const Billing: React.FC<BillingProps> = ({
  billing,
  selected,
  isOrdered,
  setIsOrdered,
  setBilling,
  setImage,
}) => {
  const handleOrder = async () => {
    setIsOrdered(true);
    setBilling(!billing);
    setImage("");
  };

  return (
    <>
      {billing && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="defaultSemiBold">Step 4:</ThemedText>
          <ThemedText type="subtitle" style={styles.stepText}>
            Lets {selected === "CAKE" ? "bake" : "make"} your {selected} to
            life?
          </ThemedText>
          <ThemedView style={{ backgroundColor: "green" }}>
            <ThemedText
              style={{
                borderStyle: "dashed",
                borderBottomColor: "black",
                borderBottomWidth: 1,
              }}
            >
              <ThemedText type="defaultSemiBold">Total:</ThemedText> 50
            </ThemedText>
            <ThemedText>
              <ThemedText type="defaultSemiBold">Payment:</ThemedText> Card
              *********0000
            </ThemedText>
            <ThemedText>
              <ThemedText type="defaultSemiBold">Delivery adress:</ThemedText>{" "}
              Crafting St 1, Magicville
            </ThemedText>
          </ThemedView>
          <Button color="black" title="Craft" onPress={handleOrder} />
        </ThemedView>
      )}
    </>
  );
};

export default Billing;
