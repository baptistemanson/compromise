const fmts = {
  text: {
    form: 'text',
  },
  normal: {
    whitespace: 'some',
    punctuation: 'some',
    case: 'some',
    unicode: 'some',
    form: 'normal',
  },
  machine: {
    whitespace: 'some',
    punctuation: 'some',
    case: 'none',
    unicode: 'some',
    form: 'machine',
  },
  root: {
    whitespace: 'some',
    punctuation: 'some',
    case: 'some',
    unicode: 'some',
    form: 'root',
  },
  implicit: {
    form: 'implicit',
  }
}
fmts.clean = fmts.normal
fmts.reduced = fmts.root
export default fmts