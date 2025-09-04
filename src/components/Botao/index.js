import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botao({ valor, func, operacao }) {

    function acao(op) {
        if(op == "incrementar") {
            func(valor + 1);
        } else {
            func(valor - 1);
        }
    }

    return (
        <View>
            <TouchableOpacity
                style={[styles.btn, operacao == "incrementar" ? styles.btnSomar : styles.btnSubtrair]}
                onPress={() => acao(operacao)}
            >
                <Text style={styles.btnTexto}>{ operacao }</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 200,
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    btnSomar: {
        backgroundColor: '#08c7e99b',
        borderColor: 'white',
    },
    btnSubtrair: {
        backgroundColor: '#f804047a',
        borderColor: 'white',
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});