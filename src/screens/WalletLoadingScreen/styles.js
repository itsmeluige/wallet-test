import { StyleSheet } from 'react-native';
import {
  Color,
  Border,
  Padding,
  FontSize,
  FontFamily,
} from '../../../GlobalStyles';

const styles = StyleSheet.create({
  background: {
    left: -120,
  },
  backgroundLayout: {
    opacity: 0.3,
    transform: [
      {
        rotate: '-32.93deg',
      },
    ],
    height: 280,
    width: 400,
    top: -37,
    backgroundColor: Color.baseColorGreyLight,
    borderBottomLeftRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    position: 'absolute',
  },
  backgroundLayout2: {
    opacity: 0.3,
    transform: [
      {
        rotate: '145.93deg',
      },
    ],
    height: 300,
    width: 404,
    top: 500,
    backgroundColor: Color.baseColorGreyLight,
    borderBottomLeftRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    position: 'absolute',
  },
  background2: {
    right: -120,
  },
  containerPosition: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  animationWalletIcon: {
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  container: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    height: 800,
  },
  container1: {
    height: 66,
  },
  walletAnimateScreen: {
    backgroundColor: Color.baseColorBlueDark,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 800,
  },
});

export default styles;
