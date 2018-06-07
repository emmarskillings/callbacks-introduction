var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, fn) {
  var wordsEdit = [];
  for (var i = 0; i < arr.length; i++) {
    wordsEdit.push(fn(arr[i]));
  }
  return wordsEdit;
}

var one = map(words, function(word) {
  return word.length;
});

var two = map(words, function(word) {
  return word.toUpperCase();
});

var three = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(one);
console.log(two);
console.log(three);
