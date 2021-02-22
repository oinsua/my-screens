import React from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView} from 'react-native';
import Radio from '../components/RadioButton';
import { RadioButton } from 'react-native-paper';

const Form = () => {
    const radio_props = [
        {label: 'Hombre', value: 0 },
        {label: 'Mujer', value: 1 }
      ];

    const [value, setValue] = React.useState('H');

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Nuevo Conductor</Text> 
            </View>

            <View style={styles.textMSG}>
                <Text style={styles.text}>Completa tus datos y te llegara por SMS tu clave de ingreso</Text> 
            </View>

            <View style={styles.radioContainer}>
              <Radio />
            </View>

            <View style={styles.viewPass}>
                <View style={styles.inputView}>
                    <TextInput placeholder="Nombres" style={styles.input} />
                </View> 
                <View style={styles.inputView}>
                    <TextInput placeholder="Apellido" style={styles.input} />
                </View> 
                <View style={styles.inputViewPhone}>
                    <Text style={styles.texPhone}>+54</Text>
                    <TextInput placeholder="Telefono Movil" style={styles.inputPhone} />
                </View> 
                <View style={styles.inputView}>
                    <TextInput placeholder="E-mail" style={styles.input} />
                </View> 
            </View>

            <View>
                <View style={styles.inputView}>
                    <TextInput placeholder="Contraseña" style={styles.input} />
                </View> 
                <View style={styles.inputView}>
                    <TextInput placeholder="Repetir Contraseña" style={styles.input}/>
                </View> 
                <View style={styles.inputView}> 
                    <TextInput placeholder="Tipo de Usuario"  style={styles.input}/>
                </View> 
            </View>

            <View>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                <View style={styles.radioContainer} >
                    <RadioButton value="H"/>
                    <Text style={styles.radio}>He leido y acepto las politicas de privacidad</Text>
                </View>
            </RadioButton.Group>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#471F6A',
      borderRadius: 20,
      width: 300,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 30,
      padding: 15,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'left',
        margin: 0,
    },
    radioContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginBottom: 10,
    },
    radio: {
        color: 'white',
        fontSize: 14,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    inputView: {
        flex: 1,
        padding: 0,
        borderRadius: 10,
    },
    inputViewPhone: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        borderRadius: 10,
    },
    texPhone: {
        marginRight: 10,
        color: 'white',
        fontSize: 14,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'left',
    },
    input: {
        height: 35,
        fontSize: 12,
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 5,
    },
    inputPhone: {
        height: 35,
        fontSize: 12,
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 5,
        width: 250,
    },
    textMSG:{
        marginBottom: 15,
    },
    viewPass: {
        marginBottom: 25,
    },
    decoration: {
        textDecorationLine: 'underline white', 
    }
  });

export default Form
