import { Cena, Opcao } from '../types';
import { simularCombate } from './combate';
import { testePericia } from './testes';
import monstros from '../data/monstros.json';
import cenas from '../data/cenas.json';

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
    const monstro = monstros.find((m) => m.nome === opcao.monstro);
    if (monstro) {
      const jogador = { pv: 20, defesa: 10, ataque: 8 }; // Exemplo de jogador
      const vitoria = simularCombate(jogador, monstro);
      if (opcao.sucesso !== undefined && opcao.falha !== undefined) {
        return getCena(vitoria ? opcao.sucesso : opcao.falha);
      }
    }
  } else if (opcao.tipo === "teste") {
    if (opcao.pericia !== undefined && opcao.cd !== undefined) {
      const sucesso = testePericia(opcao.pericia, opcao.cd);
      if (opcao.sucesso !== undefined && opcao.falha !== undefined) {
        return getCena(sucesso ? opcao.sucesso : opcao.falha);
      }
    }
  }
  if (opcao.proximaCena !== undefined) {
    return getCena(opcao.proximaCena);
  }
  throw new Error('Nenhuma próxima cena definida.');
}
