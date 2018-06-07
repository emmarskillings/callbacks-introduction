// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  for (var i = 0; i < findWaldo.length; i++) {
    if (findWaldo[i] === "Waldo") {
      return i;
    }
  }
  console.log("Found Waldo" + ' at index ' + i + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);