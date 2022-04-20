import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.container}>
          
          <Text style={styles.textStyle}>#crushingIt!</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#608059',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#eff0ce',
    rotation: 90,
    fontSize: 40,
    fontFamily: 'monospace',
    backgroundColor: 'red'
  },
  outerContainer: {
    flex: 1,
    backgroundColor: 'red',
    padding: 35
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#080808',
    padding: 5,
    borderRadius: 5
  }
});
