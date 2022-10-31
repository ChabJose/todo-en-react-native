import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Lista from './components/Lista.jsx';
import Input from './components/Input.jsx'
import Header from './components/Header.jsx'


export default function App() {

  const [data, setData] = useState([]);

  const agregar = (value) => {
    setData((prevTodo) => {
      return [
        {
          id: Date.now(),
          accion: value,
        },
        ...prevTodo,
      ];
    });
  }

  const eliminar = (id) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container.cabecera}>
        <Header />
      </View>

      <View style={styles.container}>
        <Input agregar={agregar} />
      </View>

      <View style={styles.container.lista}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Lista item={item} eliminar={eliminar} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353a40',
    alignItems: 'center',
    justifyContent: 'center',
    cabecera: {
      justifyContent: 'center',
      width: '100%',
      height: 70,
      alignItems: 'center',
      marginBottom: 10,
    },
    lista: {
      flex: 3,
      width: '90%'
    }
  },


});
