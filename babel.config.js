const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        root: ['./'],
        alias: {
          '@images': path.resolve(__dirname, 'src/assets/images'),
          '@design': path.resolve(__dirname, 'src/design'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@managers': path.resolve(__dirname, 'src/managers'),
          '@navigation': path.resolve(__dirname, 'src/navigation'),
          '@screens': path.resolve(__dirname, 'src/screens'),
          '@utilities': path.resolve(__dirname, 'src/utilities'),
          '@locales': path.resolve(__dirname, 'src/locales'),
          // '@modules': path.resolve(__dirname, 'src/modules'),
          // '@fullScreenModals': path.resolve(__dirname, 'src/fullScreenModals'),
        },
      },
    ],
  ],
};
