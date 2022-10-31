import { Text, View, StyleSheet } from 'react-native';

let today = new Date().toISOString().slice(0, 10)

const header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.container.titulo}>Lista TO DO</Text>
            <Text style={styles.container.fecha}>{today}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

        titulo: {
            width: '40%',
            color: '#c8c8be',
            fontSize: 18,
            fontWeight: 'bold',
            margin: 50,
        },
        fecha: {
            width: '40%',
            color: '#c8c8be',
            fontSize: 12,
            fontWeight: 'bold',
        }
    },


})

export default header;