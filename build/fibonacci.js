'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.generateFibonacci = generateFibonacci;

// 1 1 2 3 5 8...
// const args = process.argv.slice(2);
function generateFibonacci(howMany) {
  var x = 1;
  var y = 1;
  var sequence = [x, y];
  Array(howMany)
    .fill()
    .forEach(function () {
      var sum = x + y;
      sequence.push(sum);
      x = y;
      y = sum;
    });
  return sequence;
} // const howMany = Number(args[0]);
// colorfulLog(generateFibonacci(howMany));
// module.exports.generateFibonacci = generateFibonacci;
// export default generateFibonacci;
