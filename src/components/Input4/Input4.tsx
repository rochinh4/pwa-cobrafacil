import React from "react";
import { TextComponent } from "react-native";
import { Container, InputContainer } from "./styles";
import { TextInput } from "react-native-paper";

const Input4 = () => {
  const [text, setText] = React.useState("");

  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Hora da Cobrança"
      value={text}
      onChangeText={(text: React.SetStateAction<string>) => setText(text)}
    />
  );
};

export default Input4;
