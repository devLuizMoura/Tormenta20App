import AsyncStorage from '@react-native-async-storage/async-storage';

// Salvar dados
export const salvarDados = async (chave: string, dados: any) => {
  try {
    const jsonDados = JSON.stringify(dados);
    await AsyncStorage.setItem(chave, jsonDados);
    console.log('Dados salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
  }
};

// Carregar dados
export const carregarDados = async (chave: string) => {
  try {
    const jsonDados = await AsyncStorage.getItem(chave);
    return jsonDados ? JSON.parse(jsonDados) : null;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return null;
  }
};

export async function salvarProgresso(cenaId: number) {
  try {
    await AsyncStorage.setItem('@progresso', JSON.stringify(cenaId));
  } catch (e) {
    console.error('Erro ao salvar progresso:', e);
  }
}

export async function carregarProgresso(): Promise<number | null> {
  try {
    const progresso = await AsyncStorage.getItem('@progresso');
    return progresso ? JSON.parse(progresso) : null;
  } catch (e) {
    console.error('Erro ao carregar progresso:', e);
    return null;
  }
}
