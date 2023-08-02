import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Server from '../../../mock/api/Server';

const WalletBlackFirst = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [validAt, setValidAt] = useState('');
  const [last4numbers, setLast4numbers] = useState('');
  const [data, setData] = useState([]);
  const [secondCard, setSecondCard] = useState(false);

  useEffect(() => {
    Server.get('/cards')
      .then(response => response.data)
      .then(json => {
        setData(json);
        setName(json[0].name);
        setValidAt(json[0].validAt);
        setLast4numbers(json[0].number.split(' ')[3]);
        const dataLength = json.length;
        if (dataLength >= 2) {
          setSecondCard(true);
        }
      })
      .catch(error => {
        navigation.navigate('WalletError');
      });
  }, [navigation]);

  return (
    <View style={styles.walletBlackFirst}>
      <View style={styles.background} />
      <View style={styles.container}>
        <View style={[styles.head, styles.headSpaceBlock]}>
          <Text style={[styles.meusCartes, styles.headerFlexBox]}>
            Meus cartões
          </Text>
        </View>
        <View style={[styles.walletArea, styles.headSpaceBlock]}>
          {secondCard ? (
            <Pressable
              style={[styles.greenCard, styles.cardShadowBox]}
              onPress={() =>
                navigation.navigate('WalletGreenSecond', {
                  data: data[1],
                  secondCard,
                  blackCard: data[0],
                })
              }
            >
              <View style={styles.infoCard}>
                <View style={styles.tipoDoCarto}>
                  <Text style={[styles.greenCard1, styles.cardPosition]}>
                    Green Card
                  </Text>
                </View>
              </View>
            </Pressable>
          ) : null}
          <View style={[styles.blackCard, styles.cardShadowBox]}>
            <View style={styles.infoCard}>
              <View style={styles.tipoDoCarto1}>
                <Text style={[styles.blackCard1, styles.textClr]}>
                  Black Card
                </Text>
              </View>
              <View style={styles.dadosDoCarto}>
                <Text style={[styles.textName1, styles.textClr]}>{name}</Text>
                <View style={[styles.numeroDoCarto, styles.validadePosition]}>
                  <Text style={[styles.text2, styles.textClr]}>
                    {last4numbers}
                  </Text>
                  <Image
                    style={[styles.numeroDoCartoChild, styles.numeroLayout]}
                    resizeMode="cover"
                    source={require('../../../assets/group-65.png')}
                  />
                  <Image
                    style={[styles.numeroDoCartoItem, styles.numeroLayout]}
                    resizeMode="cover"
                    source={require('../../../assets/group-65.png')}
                  />
                  <Image
                    style={[styles.numeroDoCartoInner, styles.numeroLayout]}
                    resizeMode="cover"
                    source={require('../../../assets/group-65.png')}
                  />
                </View>
                <View style={[styles.validade, styles.validadePosition]}>
                  <Text style={[styles.text3, styles.textClr]}>{validAt}</Text>
                  <Text style={[styles.validade3, styles.textClr]}>
                    Validade
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={[styles.usarEsteCarto, styles.textClr]}
          onPress={() =>
            navigation.navigate('WalletBlackCard', {
              name: name,
              last4numbers: last4numbers,
              validAt: validAt,
              secondCard,
            })
          }
        >
          usar este cartão
        </Text>
      </View>
      <View style={[styles.topBar, styles.topBarPosition]} />
      <View style={[styles.container1, styles.topBarPosition]}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <Pressable
              style={styles.btnLayout}
              onPress={() => navigation.navigate('WalletInicio')}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require('../../../assets/btnback.png')}
              />
            </Pressable>
            <View style={[styles.titleHeader, styles.navFlexBox]}>
              <Text
                style={[styles.walletTest, styles.headerFlexBox]}
                numberOfLines={1}
              >
                Wallet Test
              </Text>
            </View>
            {!secondCard ? (
              <Pressable
                style={[styles.btnPlus, styles.btnLayout]}
                onPress={() => navigation.navigate('WalletCadastro')}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require('../../../assets/btnplus.png')}
                />
              </Pressable>
            ) : (
              <View style={[styles.btnPlus, styles.btnLayout]} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default WalletBlackFirst;
