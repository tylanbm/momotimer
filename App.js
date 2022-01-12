import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OPTIONS</Text>
      <Text>Momo Timer</Text>
      <Text>Work like no one before.</Text>
      <Text>25:00</Text>
      <Text>Dots</Text>
      <Text>Start</Text>
      <Text>Reset</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
