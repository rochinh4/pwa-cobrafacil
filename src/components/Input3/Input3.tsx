import React from "react";
import { TextComponent, Button } from "react-native";
import { Container, InputContainer } from "./styles";
import { DataTable, TextInput } from "react-native-paper";
import DatePicker from "react-native-date-picker";

const Input3 = () => {
  const [text, setText] = React.useState("");

  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Data da Cobrança ------------------------- Por exemplo: 16:30"
      value={text}
      onChangeText={(text: React.SetStateAction<string>) => setText(text)}
    />
  );
};

export default Input3;
