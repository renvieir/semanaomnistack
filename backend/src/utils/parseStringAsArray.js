module.exports = function parseStringAsArray(stringAsArray) {
  return  stringAsArray.split(',').map((element) => element.trim());
};