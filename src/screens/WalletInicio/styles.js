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
    left: -100,
  },
  backgroundLayout: {
    opacity: 0.3,
    transform: [
      {
        rotate: '-37.93deg',
      },
    ],
    height: 250,
    width: 340,
    top: -90,
    backgroundColor: Color.baseColorGreyLight,
    borderBottomLeftRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    position: 'absolute',
  },
  backgroundLayout2: {
    opacity: 0.3,
    transform: [
      {
        rotate: '136.93deg',
      },
    ],
    height: 250,
    width: 340,
    top: 610,
    backgroundColor: Color.baseColorGreyLight,
    borderBottomLeftRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    position: 'absolute',
  },
  background2: {
    right: -120,
  },
  headerFlexBox: {
    paddingLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    width: 300,
    borderRadius: Border.br_xs,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Padding.p_3xs,
  },
  buttonFlexBox: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navFlexBox: {
    padding: Padding.p_8xs,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletTest: {
    fontSize: FontSize.fontsH1_size,
    lineHeight: 32,
    textAlign: 'center',
    color: Color.baseColorWhite,
    fontFamily: FontFamily.fontsH3,
    alignSelf: 'stretch',
  },
  button: {
    fontFamily: FontFamily.fontsH5,
    lineHeight: 20,
    fontSize: FontSize.fontsH5_size,
    display: 'flex',
    top: 7,
    height: 35,
    width: 254,
    left: 0,
    position: 'absolute',
    color: Color.baseColorWhite,
  },
  buttonWrapper: {
    height: 35,
    width: 254,
  },
  btn: {
    backgroundColor: Color.baseColorBlueLight,
  },
  button1: {
    color: Color.baseColorBlueDark,
    fontFamily: FontFamily.fontsH5,
    lineHeight: 20,
    fontSize: FontSize.fontsH5_size,
    display: 'flex',
    top: 7,
    height: 35,
    width: 254,
    left: 0,
    position: 'absolute',
  },
  btn1: {
    backgroundColor: Color.baseColorGreenLight,
    marginTop: 20,
  },
  divWalletEntradas: {
    padding: Padding.p_xl,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    top: 11,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_base,
    width: 360,
    left: 0,
    alignItems: 'center',
    position: 'absolute',
    height: 800,
  },
  btnBackIcon: {
    width: 39,
    height: 39,
    display: 'none',
  },
  cadastro: {
    fontSize: FontSize.fontsH3_size,
    lineHeight: 24,
    color: Color.baseColorBlueLight,
    width: 264,
    display: 'flex',
    fontFamily: FontFamily.fontsH3,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  titleHeader: {
    width: 225,
    height: 34,
    marginLeft: 5,
    display: 'none',
  },
  nav: {
    width: 328,
  },
  header: {
    height: 54,
  },
  container1: {
    height: 66,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_base,
    width: 360,
    position: 'absolute',
  },
  walletInicio: {
    backgroundColor: Color.baseColorBlueDark,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 800,
  },
});

export default styles;
