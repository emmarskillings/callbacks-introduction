// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);
    }
  })

  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
}

function actionWhenFound(index) {
  // for (var i = 0; i < findWaldo.length; i++) {
  //   if (findWaldo[i] === "Waldo") {
  //     return i;
  //   }
  // }
  console.log("Found Waldo at index " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);