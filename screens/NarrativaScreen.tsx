import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getCena, processarEscolha } from '../services/narrativa';

// Definindo o tipo para uma cena
type Cena = {
  id: number;
  titulo: string;
  descricao: string;
  opcoes: Opcao[];
};

type Opcao = {
  texto: string;
  proximaCena?: number;
  tipo?: string;
  monstro?: string;
  pericia?: string;
  cd?: number;
  sucesso?: number;
  falha?: number;
};

export default function NarrativaScreen() {
  const [cenaAtual, setCenaAtual] = useState<Cena>(getCena(1)); // Começa na primeira cena

  const handleEscolha = (index: number) => {
    const novaCena = processarEscolha(cenaAtual, index);
    setCenaAtual(novaCena);
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{cenaAtual.titulo}</Text>
      <Text>{cenaAtual.descricao}</Text>
      {cenaAtual.opcoes.map((opcao, index) => (
        <Button key={index} title={opcao.texto} onPress={() => handleEscolha(index)} />
      ))}
    </View>
  );
}
