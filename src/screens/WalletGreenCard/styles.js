import { StyleSheet, Platform } from 'react-native';
import {
  Color,
  Border,
  Padding,
  FontSize,
  FontFamily,
} from '../../../GlobalStyles';

const styles = StyleSheet.create({
  btnFlexBox: {
    alignItems: 'center',
    paddingVertical: Padding.p_3xs,
  },
  headSpaceBlock: {
    paddingBottom: Padding.p_8xs,
    paddingHorizontal: Padding.p_8xs,
    alignItems: 'center',
  },
  headerFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardShadowBox: {
    padding: Padding.p_3xs,
    height: 180,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: Border.br_base,
  },
  cardTypo: {
    textAlign: 'left',
    lineHeight: 20,
    fontSize: FontSize.fontsH5_size,
    left: 0,
  },
  textNameLayoutTypo: {
    lineHeight: 18,
    fontSize: FontSize.fontsP_size,
    textAlign: 'left',
    left: 0,
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
  },
  numeroLayout: {
    height: 4,
    width: 22,
    top: 6,
    position: 'absolute',
  },
  btnSpaceBlock: {
    marginTop: 100,
    width: 300,
    justifyContent: 'center',
  },
  textPosition: {
    color: Color.baseColorWhite,
    fontFamily: FontFamily.fontsH5,
    top: 5,
    position: 'absolute',
  },
  topBarPosition: {
    height: 66,
    width: 400,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  navFlexBox: {
    flexDirection: 'row',
    padding: Padding.p_8xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLayout: {
    height: 39,
    width: 39,
  },
  background: {
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    height: 136,
    width: 400,
    backgroundColor: Color.baseColorGreyLight,
    top: 0,
    position: 'absolute',
    left: 0,
  },
  meusCartes: {
    fontSize: FontSize.fontsH4_size,
    lineHeight: 22,
    color: Color.baseColorBlueLight,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
    fontFamily: FontFamily.fontsH5,
  },
  head: {
    width: 303,
    height: 52,
    borderRadius: Border.br_base,
    paddingBottom: Padding.p_8xs,
    paddingHorizontal: Padding.p_8xs,
  },
  greenCard1: {
    color: Color.textColorGreyDark,
    fontFamily: FontFamily.fontsH5,
    top: 0,
    position: 'absolute',
  },
  tipoDoCarto: {
    width: 85,
    height: 20,
  },
  textName: {
    color: Color.textColorGreyDark,
    fontFamily: FontFamily.fontsH5,
    top: 0,
    position: 'absolute',
  },
  text: {
    left: 83,
    fontSize: FontSize.fontsPSmall_size,
    color: Color.textColorGreyDark,
    fontFamily: FontFamily.fontsH5,
    top: 0,
    position: 'absolute',
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
    color: Color.textColorGreyDark,
    fontFamily: FontFamily.fontsH5,
    top: 0,
    position: 'absolute',
  },
  validade1: {
    color: Color.textColorGreyDark,
    fontFamily: FontFamily.fontsH5,
    top: 0,
    position: 'absolute',
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
  greenCard: {
    backgroundColor: Color.baseColorGreenLight,
    width: 300,
    padding: Padding.p_3xs,
    height: 180,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
  },
  button: {
    height: 35,
    width: 254,
    lineHeight: 20,
    fontSize: FontSize.fontsH5_size,
    color: Color.baseColorWhite,
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    left: 0,
  },
  buttonLayout: {
    height: 35,
    width: 254,
  },
  btn: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.baseColorBlueLight,
    paddingHorizontal: Padding.p_xl,
    alignItems: 'center',
    paddingVertical: Padding.p_3xs,
  },
  blackCard1: {
    textAlign: 'left',
    lineHeight: 20,
    fontSize: FontSize.fontsH5_size,
    left: 0,
  },
  tipoDoCarto1: {
    width: 81,
    height: 20,
  },
  textName1: {
    lineHeight: 18,
    fontSize: FontSize.fontsP_size,
    textAlign: 'left',
    left: 0,
  },
  text2: {
    lineHeight: 16,
    fontSize: FontSize.fontsPSmall_size,
    textAlign: 'left',
    left: 83,
  },
  text3: {
    left: 58,
    lineHeight: 16,
    fontSize: FontSize.fontsPSmall_size,
    textAlign: 'left',
  },
  validade3: {
    lineHeight: 16,
    fontSize: FontSize.fontsPSmall_size,
    textAlign: 'left',
    left: 0,
  },
  blackCard: {
    backgroundColor: Color.textColorBlack,
    opacity: 0.5,
    padding: Padding.p_3xs,
    height: 180,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: Border.br_base,
    marginTop: 100,
  },
  walletArea: {
    height: 777,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  containerChild: {
    marginTop: 10,
    alignSelf: 'stretch',
    overflow: 'hidden',
    flex: 1,
  },
  container: {
    top: 68,
    height: 732,
    paddingHorizontal: Padding.p_base,
    alignItems: 'center',
    width: 400,
    left: 0,
    position: 'absolute',
  },
  topBar: {
    shadowColor: '#142995',
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 66,
    backgroundColor: Color.baseColorGreyLight,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  walletTest: {
    fontSize: FontSize.fontsH3_size,
    lineHeight: 24,
    fontFamily: FontFamily.fontsH3,
    color: Color.baseColorBlueDark,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
    overflow: 'hidden',
  },
  titleHeader: {
    width: 225,
    height: 34,
    marginLeft: 5,
  },
  btnPlus: {
    marginLeft: 5,
  },
  nav: {
    width: 328,
  },
  header: {
    height: 54,
    top: Platform.OS === 'ios' ? 15 : 0,
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 66,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_base,
  },
  walletGreenCard: {
    backgroundColor: Color.baseColorBlueDark,
    height: 800,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
});

export default styles;