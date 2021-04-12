import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import Button from "./components/ButtonOutlined";

import StudentArea from "./pages/StudentArea";
import CreateSubject from "./pages/CreateSubject";
import Skill from "./pages/Skill";
import CreateActivities from "./pages/CreateActivities";

export default function App() {
  const [screen, setScreen] = useState();
  return (
    <ScrollView>
      {!screen && (
        <>
          <Button
            onPress={() => setScreen("StudentArea")}
            text="Área do Aluno"
          />
          <Button
            onPress={() => setScreen("CreateSubject")}
            text="Nova disciplina"
          />
          <Button onPress={() => setScreen("Skill")} text="Skills" />
          <Button
            onPress={() => setScreen("CreateActivities")}
            text="CreateActivities"
          />
        </>
      )}
      {screen === "StudentArea" && <StudentArea />}
      {screen === "CreateSubject" && <CreateSubject />}
      {screen === "Skill" && <Skill />}
      {screen === "CreateActivities" && <CreateActivities />}
    </ScrollView>
  );
}
