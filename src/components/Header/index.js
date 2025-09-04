import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({titulo, subtitulo}) {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>Contagem atual: {subtitulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 15
  },
  subtitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 15
  },
});