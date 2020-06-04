module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@assets': './src/app/assets',
          '@config': './src/config',
          '@constants': './src/constants',
          '@interfaces': './src/app/interfaces',
          '@screens': './src/app/screens',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utils': './src/utils',
          '@components': './src/app/components',
          '@localStore': './src/localStorage'
        }
      }
    ]
  ]
};
