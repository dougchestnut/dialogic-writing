import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import glob from 'glob';
import path from 'path';

const inputFiles = glob.sync('web-src/js/*.js');
const config = inputFiles.map(inputFile => {
  const fileName = path.basename(inputFile);
  return {
    input: inputFile,
    output: {
      file: `public/js/${fileName}`,
      format: 'es',
    },
    plugins: [
      resolve(),
      commonjs(), // handles CommonJS modules
      terser() // minifies the output for production
    ]
  }
});

export default config;
