import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import{
    Container,
    ContainerSN,
    Contato
} from './styles';

const styles = StyleSheet.create({
  LogoGrupou: {
    width: 250,
    height: 100,
  },
  LogoSN: {
    width: 50,
    height: 50,
  },
});

const Footer = () => {
  return (
    <Container>
      <Contato>
        Contato
      </Contato>
      <Contato>
        grupou_contato@gmail.com
      </Contato>
      <ContainerSN>
      <View>
          <Image
            style={styles.LogoSN}
            source={require('../assets/linkedin.png')}
          />
      </View>
      <View>
          <Image
            style={styles.LogoSN}
            source={require('../assets/instagram.png')}
          />
      </View>
      <View>
          <Image
            style={styles.LogoSN}
            source={require('../assets/facebook.png')}
          />
      </View>
      </ContainerSN>
      <Image
        style={styles.LogoGrupou}
        source={require('../assets/Logo.png')}
      />
    </Container>
  );
}

export default Footer;