import React from "react";
import AppLoading from "expo-app-loading";
import config from "../config/config.json";
import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaView } from "react-native";
import { Buttonadd } from "./components/buttonadd/Buttonad";
import {
  Container,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
} from "./screens/spa/styles";
import PngPig from "./assets/pig.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Iconepig } from "./components/buttonadd/styles";
import { InputContainer } from "./components/Input/styles";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from "./styles/theme";
const Input1 = () => {
  const [nomeDevedor, setNomedevedor] = React.useState("");

  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Nome do Devedor                                                                                                              Por exemplo :             Joãozinho das Neves "
      value={nomeDevedor}
      onChangeText={(text: React.SetStateAction<string>) =>
        setNomedevedor(text)
      }
    />
  );
};
const Input2 = () => {
  const [numerocobranca, setNumerocobranca] = React.useState("");
  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Número de Cobrança                                                                                                       Por exemplo:              55DDDNÚMERO / 5573XXXXXXXX"
      value={numerocobranca}
      onChangeText={(text: React.SetStateAction<string>) =>
        setNumerocobranca(text)
      }
    />
  );
};
const Input3 = () => {
  const [datacobranca, setDatacobranca] = React.useState("");

  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Data da Cobrança (DD/MM/AAAA)                                                                             Por exemplo :              01/12/2039 "
      value={datacobranca}
      onChangeText={(text: React.SetStateAction<string>) =>
        setDatacobranca(text)
      }
    />
  );
};
const Input4 = () => {
  const [nomecobrador, setNomecobrador] = React.useState("");

  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Nome do Cobrador                                                                                                            Por exemplo :             Cersina do Carmo "
      value={nomecobrador}
      onChangeText={(text: React.SetStateAction<string>) =>
        setNomecobrador(text)
      }
    />
  );
};
const Input5 = () => {
  const [pixcobrador, setPixcobrador] = React.useState("");

  return (
    <InputContainer
      placeholderTextColor={"#ffffff"}
      placeholder="Pix do Cobrador                                                                                                                   Por exemplo :           CPF XXX.XXX.XXX-XX "
      value={pixcobrador}
      onChangeText={(text: React.SetStateAction<string>) =>
        setPixcobrador(text)
      }
    />
  );
};
//Envia os Dados da Cobrança para o Backend
async function registerCobranca() {
  let reqs = await fetch(config.urlRoteNode + "create", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeDevedor: Input1,
      numeroCobranca: Input2,
      dataCobranca: Input3,
      nomeCobrador: Input4,
      pixCobrador: Input5,
    }),
  });
}
const App: React.FC = () => {
  const [text, setText] = React.useState("");
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSerifDisplay_400Regular,
    DMSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={COLORS}>
      <StatusBar style="dark" translucent backgroundColor="transparente" />
      <SafeAreaView>
        <Container>
          <ContentHeader>
            <Title>
              {" "}
              Seja bem vindo {Input2} {"\n"} a CobraFácil
            </Title>
            <Description>
              Cobre quem te deve!{"\n"} Para salvar a cobrança, clique no botão!{" "}
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
            <TouchableOpacity>
              <Button onPress={registerCobranca}>
                <Iconepig source={PngPig} resizeMode="contain" />
              </Button>
            </TouchableOpacity>
          </ContentFooter>
        </Container>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
