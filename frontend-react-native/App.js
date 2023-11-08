import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './navigation/drawer';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Text>Hola</Text>
      <StatusBar style='light' />
    </NavigationContainer>

  );
}

