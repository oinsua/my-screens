import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const Radio = () => {
  const [value, setValue] = React.useState('Hombre');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
      <View style={styles.radioContainer} >
        <RadioButton value="Hombre"/>
        <Text style={styles.radio}>Hombre</Text>
        <RadioButton value="Mujer" />
        <Text style={styles.radio}>Mujer</Text>
      </View>
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
    radioContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'center',
    },
    radio: {
        color: 'white',
        fontSize: 16,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
});
export default Radio;