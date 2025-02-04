import { terser } from 'rollup-plugin-terser'
import sizeCheck from 'rollup-plugin-filesize-check'

const opts = { keep_classnames: true, module: true }

export default [
  {
    input: 'src/plugin.js',
    output: [{ file: 'builds/compromise-dates.cjs', format: 'umd', name: 'compromiseDates' }],
    plugins: [sizeCheck({ expect: 113, warn: 15 })],
  },
  {
    input: 'src/plugin.js',
    output: [{ file: 'builds/compromise-dates.min.js', format: 'umd', name: 'compromiseDates' }],
    plugins: [terser(opts), sizeCheck({ expect: 61, warn: 15 })],
  },
  {
    input: 'src/plugin.js',
    output: [{ file: 'builds/compromise-dates.mjs', format: 'esm' }],
    plugins: [terser(opts), sizeCheck({ expect: 61, warn: 15 })],
  }
]
