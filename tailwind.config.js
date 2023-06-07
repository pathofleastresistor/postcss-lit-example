import {tailwindTransform} from 'postcss-lit';

module.exports = {
  content: {
    files: ['./src/**/*.js'],
    transform: {
      js: tailwindTransform
    }
  }
};