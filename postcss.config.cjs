module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@csstools/postcss-global-data')({
      files: ['./src/styles/custom-media.css'],
    }),
    require('postcss-custom-media'),
    require('cssnano'),
  ],
};
