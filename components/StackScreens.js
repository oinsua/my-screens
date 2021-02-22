import React from 'react';
import { StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator(); //Crear el objeto Stack para definir las screens

//Importar las pantallas
import Form from '../screens/Form';
import Travels from '../screens/Travels';

const StackScreens = (props) => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Travel" component={Travels} options={{ title: '' }}/>
            <Stack.Screen name="Form" component={Form} options={{ title: '' }}/>
        </Stack.Navigator>
    )
}

export default StackScreens
