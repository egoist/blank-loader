
module.exports = function () {
  if (this.cacheable) this.cacheable()
  this.value = ''
  return 'module.exports = ""'
}
