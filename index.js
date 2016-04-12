var replashmentsh = [
  [/(s)([^sh])/gi, '$1h$2'],
  [/(s)$/gi, '$1h'],
  [/(x)([^\ss])/gi, '$1sh$2'],
  [/ce/gi, 'sh']
]

function reduscher (word, replashment) {
  return String.prototype.replace.apply(word, replashment)
}

module.exports = function connerify (word) {
  return replashmentsh.reduce(reduscher, word)
}
