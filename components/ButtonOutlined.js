import React from "react";
import styled from "styled-components/native";

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  background: #fff;
  border: 1px solid #a61967;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  border-radius: 5px;
  justify-content: center;
  align-items: center;

  height: 60px;
  margin: 8px;
  margin-left: ${(props) => props.marginLeft};
`;

const Text = styled.Text`
  color: #a61967;
  font-size: 16px;
  font-weight: 700;
`;

const Button = ({ text, ...others }) => {
  return (
    <TouchableOpacity {...others}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  marginLeft: "8px",
};

export default Button;
