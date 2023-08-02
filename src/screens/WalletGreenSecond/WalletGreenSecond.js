import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const WalletGreenSecond = ({ route }) => {
  const navigation = useNavigation();
  const { data, secondCard, blackCard } = route.params;
  const { name, number, validAt } = data;
  const last4numbers = number.split(' ')[3];

  const navigateToGreenCard = () => {
    navigation.navigate('WalletGreenCard', {
      name: name,
      last4numbers: last4numbers,
      validAt: validAt,
      secondCard: secondCard,
    });
  };

  return (
    <View style={styles.walletGreenSecond}>
      <View style={styles.background} />
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={[styles.meusCartes, styles.headerFlexBox]}>
            Meus cartões
          </Text>
        </View>
        <View style={styles.walletArea}>
          <Pressable
            style={[styles.blackCard, styles.cardShadowBox]}
            onPress={() =>
              navigation.navigate('WalletBlackCard', {
                name: blackCard.name,
                last4numbers: blackCard.last4numbers,
                validAt: blackCard.validAt,
                secondCard,
              })
            }
          >
            <View style={styles.infoCard}>
              <View style={styles.tipoDoCarto}>
                <Text style={[styles.blackCard1, styles.textTypo1]}>
                  Black Card
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.greenCard, styles.cardShadowBox]}
            onPress={() => navigateToGreenCard()}
          >
            <View style={styles.infoCard}>
              <View style={styles.tipoDoCarto1}>
                <Text style={[styles.greenCard1, styles.textTypo]}>
                  Green Card
                </Text>
              </View>
              <View style={styles.dadosDoCarto}>
                <Text style={[styles.textName1, styles.textTypoName]}>
                  {name}
                </Text>
                <View style={[styles.numeroDoCarto, styles.validadePosition]}>
                  <Text style={[styles.text2, styles.textTypo]}>
                    {last4numbers}
                  </Text>
                  <Image
                    style={[styles.numeroDoCartoChild, styles.numeroLayout]}
                    resizeMode="cover"
                    source={require('../../../assets/group-651.png')}
                  />
                  <Image
                    style={[styles.numeroDoCartoItem, styles.numeroLayout]}
                    resizeMode="cover"
                    source={require('../../../assets/group-651.png')}
                  />
                  <Image
                    style={[styles.numeroDoCartoInner, styles.numeroLayout]}
                    resizeMode="cover"
                    source={require('../../../assets/group-651.png')}
                  />
                </View>
                <View style={[styles.validade, styles.validadePosition]}>
                  <Text style={[styles.text3, styles.textTypo]}>{validAt}</Text>
                  <Text style={[styles.validade3, styles.textTypo]}>
                    Validade
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <Text
          style={[styles.usarEsteCarto, styles.textNameLayoutLayout]}
          onPress={() => navigateToGreenCard()}
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

export default WalletGreenSecond;
