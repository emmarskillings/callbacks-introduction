var countdownGenerator = function(x) {
  var arr = [];
  var repetitions = 0
  var blastOff = "Blast off!"
  var done = "Rockets already gone, bub!";
  for (i = 0; i < x; i++) {
    arr.push(x - i);
    }

    return function () {
      if (repetitions < x) {
        console.log("T-minus " + arr[repetitions++] + "...");
      }
      else if (repetitions++ === x) {
        console.log(blastOff);
      }
      else {
        console.log(done);
    }
  }
};



var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!