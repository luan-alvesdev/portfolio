module.exports = {
    plugins: [
      require('postcss-preset-env')({
        browsers: 'last 2 versions', // Define quais navegadores você deseja suportar
        stage: 1, // Você pode ajustar isso para controlar quais recursos são adicionados
        autoprefixer: { grid: true }, // Ativa o suporte para grid
      }),
    ],
  };
  