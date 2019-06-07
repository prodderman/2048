import svelte from 'rollup-plugin-svelte';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'
import html from 'rollup-plugin-generate-html-template';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
  },
  plugins: [
    html({
      template: 'src/assets/index.html',
      target: 'index.html',
    }),
    serve({
      openPage: '/index.html',
      contentBase: ['dist'],
      host: '0.0.0.0',
      port: 8080,
    }),
    svelte({
      extensions: ['.svelte'],
      include: 'src/**/*.svelte',
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    livereload(),
  ]
}