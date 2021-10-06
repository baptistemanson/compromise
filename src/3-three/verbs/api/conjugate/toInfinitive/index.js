// all verb forms are the same
const toPresent = function (vb, parsed) {
  const { verbToInfinitive } = vb.methods.two.transform
  parsed.root.freeze()
  let aux = parsed.auxiliary.terms().freeze()
  let str = parsed.root.text('normal')
  str = verbToInfinitive(str, vb.model)
  if (str) {
    vb = vb.replace(parsed.root, str)
  }
  // remove any auxiliary
  if (parsed.auxiliary.found) {
    vb.remove(aux)
  }
  vb.debug()
  return vb
}
export default toPresent
