import { View, TextInput, TouchableHighlight, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const input = ({ agregar }) => {
    const [listTareas, setListTareas] = useState("");

    const onChangeText = (text) => {
        setListTareas(text)
    }

    return (
        <View style={styles.entrada}>
            <TextInput
                style={styles.entrada.input}
                placeholder='Agregar tarea...'
                onChangeText={onChangeText}
            />
            <TouchableHighlight onPress={() => { setListTareas(agregar(listTareas)) }}>
                <View style={styles.entrada.boton}>
                    <Text style={{ color: '#fff' }}>Agregar</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    entrada: {
        flex: 1,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        input: {
            height: 30,
            width: 200,
            color: '#c8c8be',
            borderColor: '#7e818e',
            borderWidth: 1,
        },
        boton: {
            height: 30,
            width: 70,
            backgroundColor: '#6f45d8',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 4,
        }
    }
});

export default input;