import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const titulo = "Prática: Incremento";

  const [contar, setContar] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{ titulo }</Text>
      <Text style={styles.subtitulo}>Contagem atual: {contar}</Text>
      <TouchableOpacity
        style={[styles.btn, styles.btnSomar]}
        onPress={ () => setContar(contar + 1)}
      >
        <Text style={styles.btnTexto}>Adicionar</Text>
      </TouchableOpacity>
      { contar != 0 &&(
        <TouchableOpacity
          style={[styles.btn, styles.btnSubtrair]}
          onPress={ () => setContar(contar - 1)}
          
        >
          <Text style={styles.btnTexto}>Subtrair</Text>
        </TouchableOpacity>
      )}
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
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  subtitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginBottom: 30
  },
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
    backgroundColor: '#e908089b',
    borderColor: 'black',
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  }
});