/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables } from '../../@types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    textTiny: {
      fontSize: FontSize.large,
      color: Colors.textGray800,
    },
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.textPrimaryColor,
    },
    textWhite: {
      fontSize: FontSize.small,
      color: Colors.textWhite,
      paddingVertical:10,
      paddingHorizontal:10
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.textBlack,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.textGray400,
    },
    textBold: {
      fontWeight: 'bold',
      color : Colors.textGray400
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    titleSmall: {
      fontSize: FontSize.small * 1.5,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.error,
    },
    textSuccess: {
      color: Colors.success,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLight: {
      color: Colors.textGray200,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
  });
}
