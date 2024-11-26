import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/ThemedButton';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function ActionsScreen() {
  const isDark = useColorScheme() == 'dark';
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-kitscan-logo.png')}
          style={styles.reactLogo}
        />
    }>      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Actions</ThemedText>
      </ThemedView>
      <View style={styles.center}>
        <View style={[
          styles.stepContainer,
          {borderWidth: 2, borderRadius: 5, padding: 5, width: "100%"},
          isDark ? { borderColor: 'white' } : undefined,
          !isDark ? { borderColor: 'black' } : undefined,
        ]}>
          <View style={[
            styles.block,
            isDark ? { borderColor: 'white' } : undefined,
            !isDark ? { borderColor: 'black' } : undefined,
          ]}>
            <ThemedText style={styles.appointment}>Action item 1</ThemedText>
            <ThemedButton text='Do thing 1' onPress={()=>{}} />
          </View>
          <View style={[
            styles.block,
            isDark ? { borderColor: 'white' } : undefined,
            !isDark ? { borderColor: 'black' } : undefined,
          ]}>
            <ThemedText style={styles.appointment}>Action item 2</ThemedText>
            <ThemedButton text='Do thing 2' onPress={()=>{}} />
          </View>
          <View style={[
            styles.block,
            isDark ? { borderColor: 'white' } : undefined,
            !isDark ? { borderColor: 'black' } : undefined,
          ]}>
            <ThemedText style={styles.appointment}>Action item 3</ThemedText>
            <ThemedButton text='Do thing 3' onPress={()=>{}} />
          </View>
          <View style={[
            styles.block,
            isDark ? { borderColor: 'white' } : undefined,
            !isDark ? { borderColor: 'black' } : undefined,
          ]}>
            <ThemedText style={styles.appointment}>Action item 4</ThemedText>
            <ThemedButton text='Do thing 4' onPress={()=>{}} />
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    margin: 8,
    width: '100%',
    maxWidth: 1000,
  },
  block: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    gap: 5,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointment: {
    width: '100%',
  },
});
