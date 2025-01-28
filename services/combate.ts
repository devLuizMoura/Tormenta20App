import { Monstro } from '../types';

export function simularCombate(jogador: { pv: number; defesa: number; ataque: number }, monstro: Monstro): boolean {
  console.log(`\nCombate contra ${monstro.nome}!`);
  while (jogador.pv > 0 && monstro.pv > 0) {
    // Ataque do jogador
    const danoJogador = Math.max(0, jogador.ataque - monstro.defesa);
    monstro.pv -= danoJogador;
    console.log(`Você ataca o ${monstro.nome} e causa ${danoJogador} de dano!`);

    // Ataque do monstro
    const danoMonstro = Math.max(0, monstro.ataque - jogador.defesa);
    jogador.pv -= danoMonstro;
    console.log(`O ${monstro.nome} ataca você e causa ${danoMonstro} de dano!`);

    // Status
    console.log(`Seus PV: ${jogador.pv} | PV do ${monstro.nome}: ${monstro.pv}`);
  }

  if (jogador.pv > 0) {
    console.log(`Você derrotou o ${monstro.nome}!`);
    return true;
  } else {
    console.log(`Você foi derrotado pelo ${monstro.nome}...`);
    return false;
  }
}
