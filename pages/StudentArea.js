import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Input from "../components/Input";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutlined from "../components/ButtonOutlined";
import UploadImage from "../components/UploadImage";

export default function StudentArea() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UploadImage />
      <Input label="Nome completo" />
      <Input label="E-mail" />
      <Input secureTextEntry label="Nova senha" />
      <Input secureTextEntry label="Confirmar senha" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <ButtonOutlined marginLeft="0px" text="Cancelar" />
        <ButtonFilled marginRight="0px" text="Salvar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 32,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
