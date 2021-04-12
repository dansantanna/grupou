import React, { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import SkillBar from '../../components/skillbar';
import Footer from '../../components/footer';

import {
    Scroll,
    Container,
    Box1,
    Title,
    Container2,
    Title2,
    Botao,
    BotaoTexto,
    SkillBoxContainer,
    SkillBox,
    SkillBoxText
} from './styles';

export default function Skill()  {
  return (
     <SafeAreaView>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#277EAE" translucent = {false}/>
        <Scroll>
          <Container>
            <Title>
              Skills
            </Title>
            <Box1>
              <Container2>
                <Title2>
                    Minhas hard skills
                </Title2>
                <Botao>
                    <BotaoTexto>
                        Editar
                    </BotaoTexto>
                </Botao>
              </Container2>
              <SkillBar name = {"HTML"} width = {9.2}/>
              <SkillBar name = {"Prototipação"} width = {8.8}/>
              <SkillBar name = {"CSS"} width = {7.8}/>
              <SkillBar name = {"JavaScript"} width = {10}/>
              <SkillBar name = {"HTML"} width = {9.2}/>
              <SkillBar name = {"Prototipação"} width = {8.8}/>
              <SkillBar name = {"CSS"} width = {7.8}/>
              <SkillBar name = {"JavaScript"} width = {10}/>
            </Box1>
            <Box1>
              <Container2>
                <Title2>
                    Minhas soft skills
                </Title2>
                <Botao>
                    <BotaoTexto>
                        Editar
                    </BotaoTexto>
                </Botao>
              </Container2>
              <SkillBoxContainer>
                <SkillBox>
                    <SkillBoxText>
                        Liderança
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Empatia
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Gestão de Conflitos
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Comunicação
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Liderança
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Empatia
                    </SkillBoxText>
                </SkillBox>
              </SkillBoxContainer>
            </Box1>
            <Box1>
              <Container2>
                <Title2>
                    Minhas hard skills de interesse
                </Title2>
                <Botao>
                    <BotaoTexto>
                        Editar
                    </BotaoTexto>
                </Botao>
              </Container2>
              <SkillBoxContainer>
                <SkillBox>
                    <SkillBoxText>
                        C#
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Ilustração
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Vetorização
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Manipulação de Imagens
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        C++
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        HTML
                    </SkillBoxText>
                </SkillBox>
                <SkillBox>
                    <SkillBoxText>
                        Prototipagem
                    </SkillBoxText>
                </SkillBox>
              </SkillBoxContainer>
            </Box1>
          </Container>
          <Footer />
        </Scroll>
     </SafeAreaView>
  );
}
