import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Personagem } from '../types';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  input: {
    marginBottom: 10,
  },
});

export default function CriarPersonagemScreen() {
  const [nome, setNome] = useState('');
  const [classe, setClasse] = useState('');
  const [pv, setPv] = useState('');

  const salvarPersonagem = () => {
    const novoPersonagem: Personagem = {
      nome,
      classe,
      pv: parseInt(pv, 10),
      defesa: 10,
      ataque: 8,
      atributos: {
        forca: 10,
        destreza: 10,
        constituicao: 10,
        inteligencia: 10,
        sabedoria: 10,
        carisma: 10,
      },
    };
    console.log('Personagem salvo:', novoPersonagem);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        label="Classe"
        value={classe}
        onChangeText={setClasse}
      />
      <TextInput
        style={styles.input}
        label="PV"
        value={pv}
        onChangeText={setPv}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={salvarPersonagem}>
        Salvar
      </Button>
    </View>
  );
}
