export function testePericia(pericia: string, cd: number): boolean {
    const rolagem = Math.floor(Math.random() * 20) + 1;
    console.log(`Você rolou um ${rolagem} em ${pericia} (CD: ${cd})`);
    return rolagem >= cd;
  }
  