import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const WalletLoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WalletBlackFirst');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.walletAnimateScreen}>
      <View style={[styles.background, styles.backgroundLayout]} />
      <View testID="logo" style={[styles.container, styles.containerPosition]}>
        <Image
          style={styles.animationWalletIcon}
          resizeMode="cover"
          source={require('../../../assets/property-1default.png')}
        />
      </View>
      <View style={[styles.container1, styles.containerPosition]} />
      <View style={[styles.background2, styles.backgroundLayout2]} />
    </View>
  );
};

export default WalletLoadingScreen;
