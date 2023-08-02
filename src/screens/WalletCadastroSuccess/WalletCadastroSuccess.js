import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const WalletCadastroSuccess = ({ route }) => {
  const navigation = useNavigation();
  const { name, number, validAt, cardType, newCard } = route.params;
  const [last4numbers, setLast4numbers] = useState('');

  useEffect(() => {
    if (number) {
      setLast4numbers(number.split(' ')[3]);
    }
  }, [navigation, newCard, number]);

  return (
    <View style={styles.walletCadastro06}>
      <View style={[styles.background, styles.backgroundLayout]} />
      <View style={[styles.container, styles.containerSpaceBlock]}>
        <Text style={[styles.walletTest, styles.walletTestFlexBox]}>
          Wallet Test
        </Text>
        <Text style={[styles.cartoCadastradoCom, styles.buttonTypo1]}>
          cartão cadastrado com sucesso
        </Text>
        <View style={[styles.divWalletCadastrado, styles.navFlexBox]}>
          <View
            style={
              cardType === 'black'
                ? [styles.blackCard, styles.btnLayout]
                : [styles.greenCard, styles.btnLayout]
            }
          >
            <View style={styles.infoCard}>
              <View style={styles.tipoDoCarto}>
                <Text
                  style={
                    cardType === 'black'
                      ? [styles.blackCard1, styles.blackCard1Position]
                      : [styles.blackCard1, styles.greenCard1Position]
                  }
                >
                  {cardType === 'black' ? 'Black Card' : 'Green Card'}
                </Text>
              </View>
              <View style={styles.dadosDoCarto}>
                <Text
                  style={
                    cardType === 'black'
                      ? [styles.textName, styles.blackCard1Position]
                      : [styles.textName, styles.greenCard1Position]
                  }
                >
                  {name}
                </Text>
                <View style={[styles.numeroDoCarto, styles.validadePosition]}>
                  <Text
                    style={
                      cardType === 'black'
                        ? [styles.text, styles.textTypo]
                        : [styles.text, styles.textTypoGreen]
                    }
                  >
                    {last4numbers}
                  </Text>
                  <Image
                    style={[styles.numeroDoCartoChild, styles.numeroLayout]}
                    resizeMode="cover"
                    source={
                      cardType === 'black'
                        ? require('../../../assets/group-65.png')
                        : require('../../../assets/group-651.png')
                    }
                  />
                  <Image
                    style={[styles.numeroDoCartoItem, styles.numeroLayout]}
                    resizeMode="cover"
                    source={
                      cardType === 'black'
                        ? require('../../../assets/group-65.png')
                        : require('../../../assets/group-651.png')
                    }
                  />
                  <Image
                    style={[styles.numeroDoCartoInner, styles.numeroLayout]}
                    resizeMode="cover"
                    source={
                      cardType === 'black'
                        ? require('../../../assets/group-65.png')
                        : require('../../../assets/group-651.png')
                    }
                  />
                </View>
                <View style={[styles.validade, styles.validadePosition]}>
                  <Text
                    style={
                      cardType === 'black'
                        ? [styles.text1, styles.textTypo]
                        : [styles.text1, styles.textTypoGreen]
                    }
                  >
                    {validAt}
                  </Text>
                  <Text
                    style={
                      cardType === 'black'
                        ? [styles.validade1, styles.textTypo]
                        : [styles.validade1, styles.textTypoGreen]
                    }
                  >
                    Validade
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.btn, styles.btnLayout]}
          onPress={() => navigation.navigate('WalletLoadingScreen')}
        >
          <View style={styles.buttonLayout}>
            <Text style={[styles.button, styles.buttonFlexBox]}>avançar</Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.container1, styles.containerSpaceBlock]}>
        <View style={styles.header}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <Pressable
              style={styles.btnBack}
              onPress={() =>
                navigation.navigate('WalletInicio', { goBack: true })
              }
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require('../../../assets/btnback2.png')}
              />
            </Pressable>
            <View style={[styles.titleHeader, styles.navFlexBox]}>
              <Text
                style={[styles.cadastro, styles.buttonFlexBox]}
                numberOfLines={1}
              >
                cadastro
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.background2, styles.backgroundLayout2]} />
    </View>
  );
};

export default WalletCadastroSuccess;
