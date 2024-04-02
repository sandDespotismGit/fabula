import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

const AnimatedProgressBar = () => {
  const [neuronText, setNeuronText] = useState("NeuroN");
  const [blackIndex, setBlackIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Циклически изменяем индекс черной буквы
      setBlackIndex((prevIndex) => (prevIndex + 1) % neuronText.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const renderNeuronText = () => {
    return neuronText.split("").map((char, index) => (
      <Text
        key={index}
        style={{
          color: index === blackIndex ? "black" : "white",
          fontSize: 24,
          textShadowColor: "black",
          textShadowOffset: { x: 0, y: 0 },
          textShadowRadius: index === blackIndex ? 0 : 1,
          fontFamily: "MontserratAlternates-Bold",
          textDecorationLine: index === blackIndex ? "underline" : "none",
        }}
      >
        {char}
      </Text>
    ));
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {renderNeuronText()}
      </View>

      {/* <Text style={{
          color: "black", 
          fontSize: 14,
          fontFamily: "MontserratAlternates-Bold",
        }}>Загружаемся)</Text> */}
    </View>
  );
};

export default AnimatedProgressBar;
