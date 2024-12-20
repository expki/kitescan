import { useState } from 'react';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedTextInput } from '@/components/ThemedTextInput';

import { useSession } from '../../authentication/ctx';

export default function SignInScreen() {
  const { signIn } = useSession();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword  ] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-kitscan-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sign-In</ThemedText>
      </ThemedView>
      <View style={styles.center}>
        <SafeAreaView style={styles.stepContainer}>
          <ThemedTextInput onChangeText={setUsername} value={username} placeholder="username" />
          <ThemedTextInput onChangeText={setPassword} value={password} placeholder="password" secureTextEntry={true} />
          <ThemedButton
            disabled={username === "" || password === ""} 
            text="Login" 
            onPress={() => {
              signIn(username, password);
            }}
          />
        </SafeAreaView>
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
});
