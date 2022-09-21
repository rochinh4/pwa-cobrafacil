import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
export const Container = styled.View`
  padding: ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const ContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(10)}px;
`;
export const ContentBody = styled.View`
  margin-top: ${RFValue(25)}px;
`;

export const ContentFooter = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(5)}%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(25)}px;
  margin-top: ${RFValue(-25)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
  color: ${({ theme }) => theme.COLORS.GREEN3};
`;

export const Description = styled.Text`
  margin-top: ${RFValue(10)}px;
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY4};
  text-align: center;
`;
