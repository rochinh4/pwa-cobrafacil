import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50;
  border-radius: 20px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.COLORS.GREEN3};
`;
export const InputContainer = styled.TextInput`
  border: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY4};
  width: 100%;
  height: 45;
  justify-content: center;
  padding: 0 30px;
  margin-top: 10px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
  background-color: ${({ theme }) => theme.COLORS.GREEN2};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
