import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(100)}%;
  background-color: ${({ theme }) => theme.COLORS.GREEN3};
`;
export const Iconepig = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;
