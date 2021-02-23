import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

//Importar las pantallas
import Form from '../screens/Form';
import Travels from '../screens/Travels';

const DrawerScreens = () => {

    return (
        <Drawer.Navigator initialRouteName="Travels">
            <Drawer.Screen name="Travels" component={Travels} />
            <Drawer.Screen name="Form" component={Form} />
        </Drawer.Navigator>
    )
}

export default DrawerScreens
