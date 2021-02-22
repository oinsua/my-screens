import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


//Importar el componente Stack con todas las Screens
import StackScreens from './components/StackScreens';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StackScreens />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
