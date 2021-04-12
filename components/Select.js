import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100px;
  flex: 1;
  margin: 16px;
  align-self: center;
`;

const Text = styled.Text`
  font-size: 18px;
  color: #b4b8c6;
`;

const Wrapper = styled.View`
  color: #111;
  font-size: 18px;
  border: 1px solid #ccc;
  height: 65px;
  border-radius: 5px;
  padding: 0px 20px;
  margin-top: 5px;
`;

const Select = ({ label, options }) => {
  const [selected, setSelected] = useState();

  return (
    <Container>
      <Text>{label}</Text>
      <Wrapper>
        <Picker
          style={{
            height: "100%",
          }}
          selectedValue={selected}
          onValueChange={(val) => setSelected(val)}
        >
          {options.map(({ label, value }, idx) => (
            <Picker.Item key={idx} label={label} value={value} />
          ))}
        </Picker>
      </Wrapper>
    </Container>
  );
};

export default Select;
