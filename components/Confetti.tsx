import React from "react";
import ConfettiCannon from "react-native-confetti-cannon";

interface ConfettiProps {
  // Add any props you need for the Confetti component
}

const Confetti: React.FC<ConfettiProps> = (
  {
    /* destructure props here */
  }
) => {
  // Add your component logic here

  return (
    <ConfettiCannon
      count={200}
      origin={{ x: -10, y: 0 }}
      explosionSpeed={100}
      fallSpeed={4000}
      fadeOut={true}
    />
  );
};

export default Confetti;
