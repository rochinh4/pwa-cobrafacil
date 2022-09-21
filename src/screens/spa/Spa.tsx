import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Buttonadd } from "../../components/buttonadd/Buttonad";
import {
  Container,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
} from "./styles";
import Input1 from "../../components/Input/Input";
import Input2 from "../../components/Input2/Input2";
import Input3 from "../../components/Input3/Input3";
import Input4 from "../../components/Input4/Input4";
import Input5 from "../../components/Input5/Input5";

const Spa: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title> Seja bem vindo {"\n"} a CobraFácil</Title>
          <Description>
            Cobre quem te deve!{"\n"} Para salvar a cobrança, clique no botão!
          </Description>
        </ContentHeader>
        <ContentBody>
          <Input1 />
          <Input2 />
          <Input3 />
          <Input4 />
          <Input5 />
        </ContentBody>
        <ContentFooter>
          <Buttonadd />
        </ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Spa };
