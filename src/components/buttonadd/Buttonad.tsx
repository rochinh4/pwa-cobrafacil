import React, { useState } from "react";
import { Button, Iconepig } from "./styles";
import PngPig from "../../assets/pig.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modal } from "react-native";

const Buttonadd: React.FC = () => {
  return (
    <TouchableOpacity>
      <Button>
        <Iconepig source={PngPig} resizeMode="contain" />
      </Button>
    </TouchableOpacity>
  );
};

export { Buttonadd };
