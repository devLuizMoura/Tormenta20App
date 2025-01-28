module.exports = function (api) {
    api.cache(true); // Habilita o cache para melhorar o desempenho
    return {
      presets: ['babel-preset-expo'], // Usa o preset do Expo
      plugins: ['react-native-reanimated/plugin'], // Adiciona o plugin do Reanimated
    };
  };
  