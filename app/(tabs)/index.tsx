import { Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Title from "@/components/Title";
import Main from "@/components/Main";
import Craft from "@/components/Craft";
import Images from "@/components/Images";
import ImageGeneration from "@/components/ImageGeneration";
import Billing from "@/components/Billing";
import Congratulation from "@/components/Congratulation";

const { width: screenWidth } = Dimensions.get("window");

export default function HomeScreen() {
  const [selected, setSelected] = useState("");
  const [image, setImage] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<string>("");
  const [message, setMessage] = useState("");
  const [isMain, setIsMain] = useState(true);
  const [mainMessage, setMainMessage] = useState("Start");
  const [billing, setBilling] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  useEffect(() => {
    if (generatedImage) {
      setBilling(true);
    }
  }, [generatedImage]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        dark: "",
        light: "",
      }}
    >
      <Title screenWidth={screenWidth} />
      <Main
        setIsMain={setIsMain}
        mainMessage={mainMessage}
        setMainMessage={setMainMessage}
        setMessage={setMessage}
        image={image}
        setImage={setImage}
        setBilling={setBilling}
        setSelected={setSelected}
        setIsOrdered={setIsOrdered}
        isOrdered={isOrdered}
        screenWidth={screenWidth}
      />
      <Craft
        isMain={isMain}
        isOrdered={isOrdered}
        selected={selected}
        setSelected={setSelected}
        setImage={setImage}
      />
      <Images selected={selected} setImage={setImage} image={image} />
      <ImageGeneration
        apiKey={apiKey as string}
        image={image}
        selected={selected}
        generatedImage={generatedImage}
        setGeneratedImage={setGeneratedImage}
      />
      <Billing
        billing={billing}
        selected={selected}
        isOrdered={isOrdered}
        setIsOrdered={setIsOrdered}
        setBilling={setBilling}
        setSelected={setSelected}
        setImage={setImage}
      />
      <Congratulation
        isOrdered={isOrdered}
        selected={selected}
        generatedImage={generatedImage}
        screenWidth={screenWidth}
      />
    </ParallaxScrollView>
  );
}
