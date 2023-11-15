/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme';

/**
 * Colors
 */

export const Colors = {
  transparent: 'rgba(14, 3, 58, 0.85)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  primaryColor: '#0E033A',

  //Typography
  textPrimaryColor: '#0E033A',
  textWhite: '#ffffff',
  textBlack: '#000',
  textGray800: '#ffffff',
  textGray400: '#4D4D4D',
  textGray200: '#E2E2E9',
  primary: '#0E033A',
  success: '#28a745',
  error: '#dc3545',


  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  circleIconButtonBackground: '#fff',
  circleIconButtonColor: '#fff',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  xlarge: 30,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
