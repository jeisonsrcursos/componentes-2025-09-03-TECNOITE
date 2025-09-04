import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Botao from './src/components/Botao';
import Header from './src/components/Header';

export default function App() {

  const titulo = "Prática: Incremento";

  const [contar, setContar] = useState(0);

  return (
    <View style={styles.container}>
      <Header titulo={titulo} subtitulo={contar} />
      <Botao valor={contar} func={setContar} operacao="incrementar" />
      { contar > 0 && <Botao valor={contar} func={setContar} operacao="decrementar" /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    backgroundColor: 'lightgray'
  }
});