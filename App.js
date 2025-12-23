import * as Application from 'expo-application';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>{Application.applicationId}</Text>
      <Text>{Application.applicationName}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b0f0fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
