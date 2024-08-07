import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/script.jsx', // entry point to your Javascript
  output: {
    file: 'dist/script.js',
    format: 'es', // Immediately Invoked Function Expression, suitable for <script> tags
    name: 'getfile'
  },
  plugins: [
    
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }),
    terser() // minifies the JavaScript
  ]
};