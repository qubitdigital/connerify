var replashmentsh = [
  [/(s)([^sh])/gi, '$1h$2'],
  [/(s)$/gi, '$1h'],
  [/(x)([^\ss])/gi, '$1sh$2'],
  [/ce/gi, 'sh']
]

function reduscher (word, replacement) {
  return String.prototype.replace.apply(word, replacement)
}

module.exports = function connerify (word) {
  return replashmentsh.reduce(reduscher, word)
}
