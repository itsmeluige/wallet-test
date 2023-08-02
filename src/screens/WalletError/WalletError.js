import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const WalletError = ({ route }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.walletInicio}>
      <View style={[styles.background, styles.backgroundLayout]} />
      <View style={[styles.container, styles.headerFlexBox]}>
        <Text style={styles.walletTest}>
          {' Ops, algo deu errado :( \n \n Tente novamente'}
        </Text>
        <View style={styles.divWalletEntradas}></View>
        <Pressable
          style={[styles.btn, styles.btnSpaceBlock]}
          onPress={() => navigation.navigate('WalletInicio')}
        >
          <View style={styles.buttonWrapper}>
            <Text style={[styles.button, styles.buttonFlexBox]}>
              {' '}
              Voltar para o início
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.background2, styles.backgroundLayout2]} />
    </View>
  );
};

export default WalletError;
