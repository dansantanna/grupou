import styled from 'styled-components/native';

export const Container = styled.View`
  height: auto;
  flex:1;
  flex-direction:column;
  align-items:center;
  padding:20px 15px 40px 15px;
  justify-content: space-around;
`;

export const Box1 = styled.View`
    width:100%;
    background-color:#fff;
    padding: 20px 20px 20px 20px;
    border-radius: 15px;
    marginBottom: 10px;
    marginTop: 10px;
`;

export const Title = styled.Text`
    fontSize: 32px;
    color: #fff;
    alignSelf: flex-start;
    marginTop: 20px;
    marginLeft: 20px;
`
export const Container2 = styled.View`
    width:100%;
    flex-direction:row;
    align-items:center;
    marginBottom: 20px;
`

export const Title2 = styled.Text`
    flex:1;
    fontSize: 16px;
    color: #000;
    fontWeight: bold
`

export const Botao = styled.TouchableOpacity`
    border-width:1px;
    border-radius:5px;
    padding: 5px 20px 5px 20px;
    border-color:#D2386C;
`
export const BotaoTexto = styled.Text`
    color: #D2386C;
`

export const Scroll = styled.ScrollView`
  background-color:#3ca1d6;
`;

export const SkillContainer = styled.View`
    flex-direction: column;
    marginBottom:15px;
`;

export const Bar = styled.View`
  background-color: #E84A7F;
  width: ${props => props.width}%;
  height: 10px;
  borderRadius: 5px;
`;

export const SkillText = styled.Text`
  marginLeft: 10px;
  color: #D2386C;
`;

export const SkillTitle = styled.Text`
  color:#828282;
  marginBottom: 5px;
`;

export const SkillGraph = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SkillBox = styled.View`
    background-color: #279CDB;
    padding: 10px 15px 10px 15px;
    width:auto;
    borderRadius: 5px;
    marginRight: 10px;
    marginBottom: 5px;
    marginTop: 5px;
`;

export const SkillBoxContainer = styled.View`
    flexWrap: wrap;
    flex-direction:row;
    width: 100%;
`;

export const SkillBoxText = styled.Text`
    color: #FFF;
    fontSize: 16px;
    fontWeight: bold;
`;

