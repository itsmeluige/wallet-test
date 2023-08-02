import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Server from '../../../mock/api/Server';
import styles from './styles';

const WalletInicio = ({ route }) => {
  const navigation = useNavigation();
  const [secondCard, setSecondCard] = useState(false);
  const { goBack } = route.params ? route.params : false;

  const handleNavigation = () => {
    if (!secondCard) {
      navigation.navigate('WalletCadastro');
    } else {
      alert('Você já atingiu o número máximo de cartões =)');
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () =>
      Server.get('/cards')
        .then(response => response.data)
        .then(json => {
          const dataLength = json.length;
          if (dataLength >= 2) {
            setSecondCard(true);
          } else {
            setSecondCard(false);
          }
        })
        .catch(error => {
          navigation.navigate('WalletError');
        }),
    );
  }, [navigation]);

  return (
    <View style={styles.walletInicio}>
      <View style={[styles.background, styles.backgroundLayout]} />
      <View style={[styles.container, styles.headerFlexBox]}>
        <Text style={styles.walletTest}>Wallet Test</Text>
        <View style={styles.divWalletEntradas}>
          <Pressable
            style={[styles.btn, styles.btnSpaceBlock]}
            onPress={() => navigation.navigate('WalletBlackFirst')}
          >
            <View style={styles.buttonWrapper}>
              <Text style={[styles.button, styles.buttonFlexBox]}>
                {' '}
                meus cartões
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={[styles.btn1, styles.btnSpaceBlock]}
            onPress={() => handleNavigation()}
          >
            <View style={styles.buttonWrapper}>
              <Text style={[styles.button1, styles.buttonFlexBox]}>
                cadastrar cartão
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={[styles.background2, styles.backgroundLayout2]} />
    </View>
  );
};

export default WalletInicio;
