import React, { useState } from "react";
import { Button, Iconepig } from "./styles";
import PngPig from "../../assets/pig.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modal } from "react-native";
import { isNumericLiteral } from "typescript";
import { Text } from "react-native-paper";

const Buttonadd: React.FC = () => {
  return (
    <TouchableOpacity>
      <Button
        onActivated={alert(
          "Sua cobrança foi salva! E já entraremos em contato!"
        )}
      >
        <Iconepig source={PngPig} resizeMode="contain" />
      </Button>
    </TouchableOpacity>
  );
};

export { Buttonadd };
