import type { ColorSchemeName } from 'react-native';

export type ThemedProps<T> = T & {
  lightColor?: ColorSchemeName;
  darkColor?: ColorSchemeName;
};

export type ThemedTypeProps<T> = ThemedProps<T> & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};
