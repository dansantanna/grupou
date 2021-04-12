import React from "react";
import { View, Dimensions } from "react-native";
import styled from "styled-components/native";

import Input from "../components/Input";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutlined from "../components/ButtonOutlined";
import Select from "../components/Select";

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;

const Text = styled.Text`
  font-size: 24px;
  color: #b4b8c6;
  margin: 10px 0;
`;

const Container = styled.View`
  margin-top: 20px;
  padding: 16px;
  justify-content: space-between;
  height: ${Math.round(Dimensions.get("window").height - 20)}px;
`;

const ContainerInput = styled.View`
  flex-direction: row;
`;

const CreateSubject = () => {
  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Title>Criar atividade</Title>
        <ContainerInput>
          <Input label="Nome da atividade" />
        </ContainerInput>
        <ContainerInput>
          <Input label="Pontuação" />
          <Select
            options={[
              { label: "Fácil", value: "easy" },
              { label: "Médio", value: "medium" },
              { label: "Difícil", value: "hard" },
            ]}
            label="Qtd. de integrantes"
          />
        </ContainerInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <ButtonOutlined marginLeft="0px" text="Cancelar" />
        <ButtonFilled marginRight="0px" text="Confirmar" />
      </View>
    </Container>
  );
};

export default CreateSubject;
