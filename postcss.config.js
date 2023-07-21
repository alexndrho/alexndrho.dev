import postCssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';

export default {
  plugins: [
    postCssGlobalData({
      files: ['./src/styles/custom-media.css'],
    }),
    postcssCustomMedia(),
  ],
};
