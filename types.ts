export type Monstro = {
  nome: string;
  pv: number;
  defesa: number;
  ataque: number;
};

export type Cena = {
  id: number;
  titulo: string;
  descricao: string;
  opcoes: Opcao[];
};

export type Opcao = {
  texto: string;
  proximaCena?: number;
  tipo?: string;
  monstro?: string;
  pericia?: string;
  cd?: number;
  sucesso?: number;
  falha?: number;
};

export type Personagem = {
  nome: string;
  classe: string;
  pv: number;
  defesa: number;
  ataque: number;
  atributos: {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
  };
};
