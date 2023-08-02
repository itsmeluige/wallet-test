import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const WalletGreenCard = ({ route }) => {
  const navigation = useNavigation();
  const { name, last4numbers, validAt, secondCard } = route.params;

  return (
    <View style={styles.walletGreenCard}>
      <View style={styles.background} />
      <View style={[styles.container, styles.btnFlexBox]}>
        <View style={[styles.head, styles.headSpaceBlock]}>
          <Text style={[styles.meusCartes, styles.headerFlexBox]}>
            Meus cartões
          </Text>
        </View>
        <View style={[styles.walletArea, styles.headSpaceBlock]}>
          <View style={[styles.greenCard, styles.cardShadowBox]}>
            <View style={styles.infoCard}>
              <View style={styles.tipoDoCarto}>
                <Text style={[styles.greenCard1, styles.cardTypo]}>
                  Green Card
                </Text>
              </View>
              <View style={styles.dadosDoCarto}>
                <Text style={styles.textName}>{name}</Text>
                <View style={[styles.numeroDoCarto, styles.validadePosition]}>
                  <Text style={[styles.text, styles.textTypo]}>
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
                  <Text style={[styles.text1, styles.textTypo]}>{validAt}</Text>
                  <Text style={[styles.validade1, styles.textTypo]}>
                    Validade
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.btn, styles.btnSpaceBlock]}>
            <View style={styles.buttonLayout}>
              <Text style={[styles.button, styles.textPosition]}>
                pagar com este cartão
              </Text>
            </View>
          </View>
          <View style={[styles.blackCard, styles.btnSpaceBlock]}>
            <View style={styles.infoCard}>
              <View style={styles.tipoDoCarto1}>
                <Text style={[styles.blackCard1, styles.textPosition]}>
                  Black Card
                </Text>
              </View>
              <View style={styles.dadosDoCarto}></View>
            </View>
          </View>
        </View>
        <View style={styles.containerChild} />
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

export default WalletGreenCard;
