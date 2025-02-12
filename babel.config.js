module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          src: './src',
          '@design': './src/design',
          '@design/*': './src/design/*',
          '@components': './src/components',
          '@managers': './src/managers',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@screens/*': './src/screens/*',
          '@utilities': './src/utilities',
          // '@i18n': './src/i18n',
          // '@modules': './src/modules',
          // '@fullScreenModals': './src/modals/FullScreenModal',
        },
      },
    ],
  ],
};
