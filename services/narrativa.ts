import cenas from '../data/cenas.json';

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

export function getCena(id: number): Cena {
  const cena = cenas.find((c) => c.id === id);
  if (!cena) {
    throw new Error(`Cena com ID ${id} não encontrada.`);
  }
  return cena;
}

export function processarEscolha(cenaAtual: Cena, escolha: number): Cena {
  const opcao = cenaAtual.opcoes[escolha];
  if (opcao.tipo === "combate") {
    // Lógica de combate (a ser implementada)
    return getCena(opcao.sucesso || 1); // Exemplo: retorna a cena de sucesso
  } else if (opcao.tipo === "teste") {
    // Lógica de teste de perícia (a ser implementada)
    return getCena(opcao.sucesso || 1); // Exemplo: retorna a cena de sucesso
  } else {
    return getCena(opcao.proximaCena || 1);
  }
}
