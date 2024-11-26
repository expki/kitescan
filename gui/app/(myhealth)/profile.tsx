import { StyleSheet, Image, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedButton } from '@/components/ThemedButton';

import { useSession } from '../../authentication/ctx';

export default function ProfileScreen() {
  const { signOut, session } = useSession();

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
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>
      <View style={styles.center}>
        <ThemedView style={styles.stepContainer}>
          <View>
            <ThemedText type="default" style={{fontSize: 20}}>Username:</ThemedText>
            <ThemedTextInput value={session ?? ''} placeholder="username" editable={false} />
          </View>
          <View>
            <ThemedText type="default" style={{fontSize: 20}}>Full Name:</ThemedText>
            <ThemedTextInput value='' placeholder="full name" editable={false} />
          </View>
          <View>
            <ThemedText type="default" style={{fontSize: 20}}>Email:</ThemedText>
            <ThemedTextInput value='' placeholder="email" editable={false} />
          </View>
          <View>
            <ThemedText type="default" style={{fontSize: 20}}>Mobile:</ThemedText>
            <ThemedTextInput value='' placeholder="mobile" editable={false} />
          </View>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedButton text="Logout" onPress={() => {
            signOut();
          }} />
        </ThemedView>
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
  row: {
    flexDirection: 'row',
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
