import { useIsFocused, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CardScanner, { CardScannerResponse } from 'rn-card-scanner';
import styles from './styles';

const WalletScanner = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const _onPressAddManually = params => {
    navigation.navigate('WalletCadastro', {
      scannerNumber: params.cardNumber
        .replace(/\s?/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim(),
      scannerDate: params.expiryMonth + '/' + params.expiryYear,
    });
  };

  return (
    <View style={styles.container}>
      <CardScanner
        disabled={!isFocused}
        style={styles.scanner}
        didCardScan={_onPressAddManually}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.addBtn, { marginBottom: 16 }]}
      >
        <Text style={styles.addText}>Adicionar manualmente</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletScanner;
