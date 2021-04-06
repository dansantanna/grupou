import React from "react";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  color: #111;
  font-size: 18px;
  border: 1px solid #ccc;
  height: 65px;
  border-radius: 5px;
  padding: 0px 20px;
  margin-top: 5px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #b4b8c6;
`;

const Container = styled.View`
  width: 100%;
  margin: 16px;
  align-self: center;
`;

const Input = ({ label, ...others }) => {
  return (
    <Container>
      <Text>{label}</Text>
      <TextInput {...others} />
    </Container>
  );
};

export default Input;
