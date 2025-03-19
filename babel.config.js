module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@': './src',
            '@assets': './assets',
            '@hooks': './hooks',
            '@components': './components',
            '@constants': './constants'
          },
        },
      ],
    ],
  };
}; 