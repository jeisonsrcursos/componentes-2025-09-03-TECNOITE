import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  // Declaração da constante com o nome da aplicação.
  const titulo = "Prática: Incremento";

  // Declaração da constante de reatividade "int" iniciando em zero.
  const [contar, setContar] = useState(0);

  return (
    //Componente "View" similar a tag "div" do HTML, funcionando como um container,
    // mas nesse caso, representando a tela da aplcação.
    <View style={styles.container}>
      {/*
        Componente "Text" responsável por exibir um texto na tela, sem ele
        será exibido um erro, pois o react native não saberá interpretar o
        comando.
        "{ titulo }": exibirá o centúdo da constante "titulo".
      */}
      <Text style={styles.titulo}>{ titulo }</Text>
      {/*
        "{ titulo }": exibirá o centúdo da constante reativa "contar".
      */}
      <Text style={styles.subtitulo}>Contagem atual: {contar}</Text>
      {/* Botão que executará alguma ação, similar a tag "button" do "HTML". */}
      {/*
        O atributo "onPress" permite executar alguma função ou ação ao ser
        ser pressionado.
        "() => setContar(contar + 1)": função anônima de incremento. Botão de incremento.
      */}
      <TouchableOpacity
        style={[styles.btn, styles.btnSomar]}
        onPress={ () => setContar(contar + 1)}
      >
        <Text style={styles.btnTexto}>Adicionar</Text>
      </TouchableOpacity>
      {/*
        O atributo "onPress" permite executar alguma função ou ação ao ser
        ser pressionado.
        "() => setContar(contar + 1)": função anônima de decremento. Botão de decremento.
        O bloco a seguir só exibirá o "botão de decrementar", se "contar" for diferente de "0".
      */}
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
  // Estilização da tela do APP
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  // Estilização do título do APP
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  // Estilização do subtítulo do APP
  subtitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginBottom: 30
  },
  // Estilização padrão dos botões
  btn: {
    width: 200,
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    margin: 10
  },
  // Estilização do botão de incrementar
  btnSomar: {
    backgroundColor: '#08c7e99b',
    borderColor: 'white',
  },
  // Estilização do botão de decrementar
  btnSubtrair: {
    backgroundColor: '#e908089b',
    borderColor: 'black',
  },
  // Estilização do texto dos botões
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  }
});