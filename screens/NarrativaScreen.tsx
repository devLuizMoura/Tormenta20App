import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getCena, processarEscolha } from '../services/narrativa';
import { salvarProgresso, carregarProgresso } from '../services/storage';
import { Cena } from '../types';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default function NarrativaScreen() {
  const [cenaAtual, setCenaAtual] = useState<Cena | null>(null);

  useEffect(() => {
    async function loadProgresso() {
      const progresso = await carregarProgresso();
      setCenaAtual(progresso !== null ? getCena(progresso) : getCena(1));
    }
    loadProgresso();
  }, []);

  const handleEscolha = async (escolha: number) => {
    if (cenaAtual) {
      const novaCena = processarEscolha(cenaAtual, escolha);
      setCenaAtual(novaCena);
      await salvarProgresso(novaCena.id);
    }
  };

  if (!cenaAtual) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cenaAtual.titulo}</Text>
      <Text style={styles.text}>{cenaAtual.descricao}</Text>
      {cenaAtual.opcoes.map((opcao, index) => (
        <View key={index} style={styles.button}>
          <Button
            title={opcao.texto}
            onPress={() => handleEscolha(index)}
          />
        </View>
      ))}
    </View>
  );
}
