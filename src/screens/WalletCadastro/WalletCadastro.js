import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { useNavigation } from '@react-navigation/native';
import Server from '../../../mock/api/Server';
import styles from './styles';
import uuid from '../../utils/utils';

const WalletCadastro = ({ route }) => {
  const navigation = useNavigation();
  const { scannerNumber, scannerDate } = route.params ? route.params : {};
  const [btnDisable, setBtnDisable] = useState(true);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [validAt, setValidAt] = useState('');
  const [cvv, setCvv] = useState('');
  const [newCard, setNewCard] = useState('');
  const [cardType, setCardType] = useState('');

  const generateGreenOrBlackCard = () => {
    const typeArray = ['green', 'black'];
    const randomNumber = Math.floor(Math.random() * typeArray.length);
    setCardType('green');
  };

  const handleName = text => {
    setName(text);
  };

  const handleNumber = text => {
    setNumber(text);
  };

  const handleValidAt = text => {
    setValidAt(text);
  };

  const handleCVV = text => {
    setCvv(text);
  };

  const validateCardNumber = number => {
    if (number.length < 19) {
      alert('o número do cartão não é válido');
      return false;
    } else {
      return true;
    }
  };

  const validateDate = inputDate => {
    const inputMonth = inputDate.split('/')[0];
    const inputYear = inputDate.split('/')[1];
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear().toString().substr(2);
    const todayMonth = todayDate.getUTCMonth();
    if (inputYear < todayYear) return false;
    if (!(inputMonth >= 1 && inputMonth <= 12)) return false;
    if (inputMonth < todayMonth && inputYear <= todayYear) false;
    if (inputYear >= todayYear) return true;
    else if (inputMonth >= todayMonth) return true;
    else return false;
  };

  const registerCard = () => {
    if (name && number && validAt && cvv) {
      const validDate = validateDate(validAt);
      const validNumber = validateCardNumber(number);

      if (!validDate) {
        alert('A data de vencimento não é válida');
      }

      if (validDate && validNumber) {
        const card = {
          id: uuid(),
          name: name,
          number: number,
          validAt: validAt,
          cvv: cvv,
          type: cardType,
        };
        Server.post('/cards', card)
          .then(response => {
            setNewCard(response.data.id);
            navigation.navigate('WalletCadastroSuccess', {
              name: name,
              number: number,
              validAt: validAt,
              cvv: cvv,
              cardType,
              newCard,
            });
          })
          .catch(error => {
            navigation.navigate('WalletError');
          });
      }
    }
  };

  useEffect(() => {
    generateGreenOrBlackCard();
    if (scannerNumber && scannerDate) {
      setNumber(scannerNumber);
      setValidAt(scannerDate);
    }
    if (name && number && validAt && cvv) {
      setBtnDisable(false);
    }
  }, [name, number, validAt, cvv, scannerNumber, scannerDate]);

  return (
    <View style={styles.walletCadastro01}>
      <View style={[styles.background, styles.backgroundLayout]} />
      <View style={[styles.container, styles.containerFlexBox]}>
        <Text style={styles.walletTest}>Wallet Test</Text>
        <View style={styles.animationWalletbtninputLab}>
          <Text style={[styles.label1, styles.labelTypo]}>
            número do cartão
          </Text>
          <View style={[styles.input]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('WalletScanner')}
            >
              <Image
                style={styles.icons8oldTimeCamera}
                resizeMode="cover"
                source={require('../../../assets/icons8oldtimecamera1.png')}
              />
            </TouchableOpacity>
            <TextInputMask
              onChangeText={formatted => {
                handleNumber(formatted);
              }}
              style={[styles.input]}
              mask={'[0000] [0000] [0000] [0000]'}
              keyboardType="numeric"
              placeholderTextColor="grey"
              value={scannerNumber ? scannerNumber : ''}
            />
          </View>
        </View>
        <View style={styles.animationWalletbtninputLab}>
          <Text style={[styles.label1, styles.labelTypo]}>
            nome do titular do cartão
          </Text>
          <View style={[styles.input1, styles.inputShadowBox]}>
            <TextInput
              type="text"
              style={[styles.input]}
              autoCapitalize="none"
              onChangeText={handleName}
              numberOfLines={1}
            />
          </View>
        </View>
        <View style={styles.div2Label}>
          <View style={styles.animationWalletbtninputLab2}>
            <Text style={[styles.label2, styles.inputLayout]}>vencimento</Text>
            <View style={[styles.input2, styles.inputLayout]}>
              <TextInputMask
                onChangeText={(formatted, extracted) => {
                  handleValidAt(extracted);
                }}
                style={[styles.input]}
                mask={'[00]{/}[00]'}
                placeholder={'00/00'}
                keyboardType="numeric"
                placeholderTextColor="grey"
                value={scannerDate ? scannerDate : ''}
              />
            </View>
          </View>
          <View style={styles.animationWalletbtninputLab2}>
            <Text style={[styles.label2, styles.inputLayout]}>
              código de segurança
            </Text>
            <View style={[styles.input3, styles.inputLayout]}>
              <TextInput
                keyboardType="numeric"
                placeholder="***"
                maxLength={3}
                style={[styles.input]}
                autoCapitalize="none"
                onChangeText={handleCVV}
                numberOfLines={1}
              />
            </View>
          </View>
        </View>

        <Pressable
          style={
            btnDisable
              ? [styles.btnDisabled, styles.containerFlexBox]
              : [styles.btnEnable, styles.containerFlexBox]
          }
          onPress={() => registerCard()}
        >
          <View style={styles.buttonLayout}>
            <Text
              style={
                btnDisable
                  ? [styles.buttonDisabled, styles.buttonLayout]
                  : [styles.buttonEnabled, styles.buttonLayout]
              }
            >
              avançar
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.container1, styles.containerFlexBox]}>
        <View style={[styles.header, styles.containerFlexBox]}>
          <View style={[styles.nav, styles.navFlexBox]}>
            <Pressable
              style={styles.btnBack}
              onPress={() => navigation.goBack()}
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

export default WalletCadastro;
