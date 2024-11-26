import { useState } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useColorScheme } from '@/hooks/useColorScheme';
import type { ThemedProps } from './types';

type ThemedButtonProps = ThemedProps<{
  onPress: () => void,
  text: string,
  disabled?: boolean,
}>;

export function ThemedButton({
  lightColor,
  darkColor,
  onPress, 
  text,
  disabled,
}: ThemedButtonProps) {
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const isDark = useColorScheme() == 'dark';

  return (
    <Pressable 
      onHoverIn={() => setHovering(true)}
      onHoverOut={() => setHovering(false)}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
      onPress={onPress}
      disabled={disabled}
      style={[
        isDark ? styles.buttonLight : undefined,
        !isDark ? styles.buttonDark : undefined,
        hovering && isDark ? styles.buttonLightHover : undefined,
        hovering && !isDark ? styles.buttonDarkHover : undefined,
        pressing && isDark ? styles.buttonLightPress : undefined,
        pressing && !isDark ? styles.buttonDarkPress : undefined,
      ]} 
    >
      <ThemedText style={[
        isDark ? styles.textLight : undefined,
        !isDark ? styles.textDark : undefined,
      ]}>{text}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonLight: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 0,
    backgroundColor: 'white',
  },
  buttonDark: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 0,
    backgroundColor: 'black',
  },
  buttonLightHover: {
    backgroundColor: 'red',
  },
  buttonDarkHover: {
    backgroundColor: 'green',
  },
  buttonLightPress: {
    backgroundColor: 'blue',
  },
  buttonDarkPress: {
    backgroundColor: 'purple',
  },
  textLight: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  textDark: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
