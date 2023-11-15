import { StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  const base = {
    ...Layout.center,
    ...Gutters.regularHPadding,
    height: 50,
    backgroundColor: Colors.primary,
  };
  const rounded = {
    ...base,
    borderRadius: 10,
  };
  const circle = {
    ...Layout.center,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.circleButtonBackground,
    color: Colors.circleButtonColor,
    fill: Colors.circleButtonColor,
  };

  const circleICon = {
    ...Layout.center,
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: Colors.circleIconButtonBackground,
    color: Colors.circleIconButtonColor,
    fill: Colors.circleIconButtonColor,
  };

  return StyleSheet.create({
    base,
    rounded,
    circle,
    circleICon,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  });
}
