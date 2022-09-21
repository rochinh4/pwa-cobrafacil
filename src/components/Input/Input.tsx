import React from "react";
import { TextComponent } from "react-native";
import { Container, InputContainer } from "./styles";

const Input1 = () => {
  const [text, setText] = React.useState("");

  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Nome do Devedor"
      value={text}
      onChangeText={(text: React.SetStateAction<string>) => setText(text)}
    />
  );
};

export default Input1;
