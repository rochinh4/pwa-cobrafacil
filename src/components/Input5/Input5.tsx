import React from "react";
import { TextComponent } from "react-native";
import { Container, InputContainer } from "./styles";
import { TextInput } from "react-native-paper";

const Input5 = () => {
  const [text, setText] = React.useState("");

  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Pix do Cobrador                                                                                                                   Por exemplo :           CPF XXX.XXX.XXX-XX "
      value={text}
      onChangeText={(text: React.SetStateAction<string>) => setText(text)}
    />
  );
};

export default Input5;
