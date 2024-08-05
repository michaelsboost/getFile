import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/script.js', // entry point to your Javascript
  output: {
    file: 'dist/script.js',
    format: 'es', // Immediately Invoked Function Expression, suitable for <script> tags
    name: 'getfile'
  },
  plugins: [
    
    babel({ exclude: "node_modules/**" }),
    terser() // minifies the JavaScript
  ]
};