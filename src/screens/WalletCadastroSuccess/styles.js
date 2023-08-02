import { StyleSheet, Platform } from 'react-native';
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
    height: 240,
    width: 330,
    top: 640,
    backgroundColor: Color.baseColorGreyLight,
    borderBottomLeftRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_31xl,
    position: 'absolute',
  },
  background2: {
    right: -110,
  },
  containerSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
  },
  walletTestFlexBox: {
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  buttonTypo1: {
    fontFamily: FontFamily.fontsH5,
    color: Color.baseColorWhite,
  },
  navFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLayout: {
    width: 300,
    justifyContent: 'center',
  },
  blackCard1Position: {
    textAlign: 'left',
    fontFamily: FontFamily.fontsH5,
    color: Color.baseColorWhite,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 150,
  },
  greenCard1Position: {
    textAlign: 'left',
    fontFamily: FontFamily.fontsH5,
    color: Color.textColorGreyDark,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 150,
  },
  validadePosition: {
    height: 16,
    left: 0,
    position: 'absolute',
  },
  textTypo: {
    lineHeight: 16,
    fontSize: FontSize.fontsPSmall_size,
    textAlign: 'left',
    fontFamily: FontFamily.fontsH5,
    color: Color.baseColorWhite,
    top: 1.5,
    position: 'absolute',
  },
  textTypoGreen: {
    lineHeight: 16,
    fontSize: FontSize.fontsPSmall_size,
    textAlign: 'left',
    fontFamily: FontFamily.fontsH5,
    color: Color.textColorGreyDark,
    top: 1.5,
    position: 'absolute',
  },
  numeroLayout: {
    height: 4,
    width: 22,
    top: 6,
    position: 'absolute',
  },
  buttonFlexBox: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletTest: {
    fontSize: FontSize.fontsH1_size,
    lineHeight: 32,
    color: Color.baseColorWhite,
    textAlign: 'center',
    fontFamily: FontFamily.fontsH3,
  },
  cartoCadastradoCom: {
    fontSize: FontSize.fontsH4_size,
    lineHeight: 22,
    marginTop: 10,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  blackCard1: {
    lineHeight: 20,
    fontSize: FontSize.fontsH5_size,
  },
  tipoDoCarto: {
    width: 81,
    height: 20,
  },
  textName: {
    fontSize: FontSize.fontsP_size,
    lineHeight: 18,
  },
  text: {
    left: 83,
  },
  numeroDoCartoChild: {
    left: 58,
  },
  numeroDoCartoItem: {
    left: 29,
  },
  numeroDoCartoInner: {
    left: 0,
  },
  numeroDoCarto: {
    top: 21,
    width: 114,
  },
  text1: {
    left: 58,
  },
  validade1: {
    left: 0,
  },
  validade: {
    top: 39,
    width: 94,
  },
  dadosDoCarto: {
    width: 129,
    height: 55,
    marginTop: 34,
  },
  infoCard: {
    width: 220,
    height: 130,
    padding: Padding.p_8xs,
  },
  blackCard: {
    borderRadius: Border.br_base,
    backgroundColor: Color.textColorBlack,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    height: 180,
    padding: Padding.p_3xs,
  },
  greenCard: {
    backgroundColor: Color.baseColorGreenLight,
    borderRadius: Border.br_base,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    height: 180,
    padding: Padding.p_3xs,
  },
  divWalletCadastrado: {
    padding: Padding.p_xl,
    marginTop: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 35,
    width: 254,
    lineHeight: 20,
    fontSize: FontSize.fontsH5_size,
    fontFamily: FontFamily.fontsH5,
    color: Color.baseColorWhite,
    left: 0,
    display: 'flex',
    top: 6,
    position: 'absolute',
  },
  buttonLayout: {
    height: 35,
    width: 254,
  },
  btn: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.baseColorBlueLight,
    paddingHorizontal: Padding.p_xl,
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: Padding.p_3xs,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Padding.p_base,
    width: 360,
    paddingVertical: Padding.p_3xs,
    left: 15,
    top: 0,
    position: 'absolute',
    height: 800,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  btnBack: {
    width: 39,
    height: 39,
  },
  cadastro: {
    fontSize: FontSize.fontsH3_size,
    lineHeight: 24,
    color: Color.baseColorBlueLight,
    width: 264,
    fontFamily: FontFamily.fontsH3,
    display: 'flex',
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  titleHeader: {
    width: 225,
    height: 34,
    marginLeft: 5,
    padding: Padding.p_8xs,
    justifyContent: 'center',
  },
  nav: {
    width: 328,
    padding: Padding.p_8xs,
  },
  header: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? 15 : 0,
  },
  container1: {
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Padding.p_base,
    width: 360,
    paddingVertical: Padding.p_3xs,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  walletCadastro06: {
    backgroundColor: Color.baseColorBlueDark,
    flex: 1,
    overflow: 'hidden',
    height: 800,
    width: '100%',
  },
});

export default styles;
