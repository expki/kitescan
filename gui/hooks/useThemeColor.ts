/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import type { ColorSchemeName } from 'react-native';

export function useThemeColor(
  props: { light?: ColorSchemeName; dark?: ColorSchemeName },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function invertColorScheme(color: ColorSchemeName): ColorSchemeName {
  switch (color) {
    case 'dark':
      return 'light';
    case 'light':
      return 'dark';
    case undefined:
      return undefined;
    case null:
      return null;
  }
}
