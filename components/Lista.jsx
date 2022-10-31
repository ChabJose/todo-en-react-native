import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

const Lista = ({ item, eliminar }) => {

    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedor.tarea}>
                <Text style={{ color: '#c8c8be' }}>{item.accion}</Text>
            </View>
            <TouchableHighlight onPress={() => eliminar(item.id)} >
                <View style={styles.contenedor.boton}>
                    <Text
                        style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}
                    >
                        Eliminar
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    );


}

const styles = StyleSheet.create({
    contenedor: {

        backgroundColor: '#2c3137',
        shadowColor: '#101214',
        shadowRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#7e818e',
        borderBottomWidth: 1,
        tarea: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            width: '80%',
            minHeight: 40,
        },
        boton: {
            backgroundColor: '#CB3B92',
            height: 20,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 4,
        }
    }
})

export default Lista;