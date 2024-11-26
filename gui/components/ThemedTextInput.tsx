import React from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import type { ThemedProps } from './types';

export type ThemedTextInputProps = ThemedProps<TextInputProps>;

export function ThemedTextInput({
  lightColor,
  darkColor,
  style,
  ...props
}: ThemedTextInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  return (
    <TextInput
      style={[
        styles.input,
        {color: color, borderColor: color, padding: 10},
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
