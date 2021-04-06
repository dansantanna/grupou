import React from "react";
import styled from "styled-components/native";
import imageAvatarSrc from "../assets/avatar.png";

const ImageAvatar = styled.Image`
  height: 150px;
  width: 150px;
  margin-bottom: 20px;
  border-radius: 180px;
`;

const Container = styled.View`
  width: 100%;
  margin: 16px;
  align-items: center;
`;

const TouchableOpacity = styled.TouchableOpacity`
  background: #fff;
  border: 1px solid #a61967;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  border-radius: 5px;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 200px;
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

const UploadImage = ({}) => {
  return (
    <Container>
      <ImageAvatar source={imageAvatarSrc} />
      <Button text="Carregar nova foto" />
    </Container>
  );
};

export default UploadImage;
