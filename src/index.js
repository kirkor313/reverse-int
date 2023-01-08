module.exports = function reverse (n) {
  let newStr = String(Math.abs(n)).split('').reverse().join('');
  return newStr;
}
