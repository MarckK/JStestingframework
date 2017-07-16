const assert = {
  equal: function(a, b) {
    if (a === b) {
      console.log("Excellent--Test passed.");
    } else {
      let message = `Test failed! Expected:  ${a}, Got incorrect result:  ${b}`;
      console.log(stackTrace(message));
    }
  },
};

function stackTrace(message) {
  var err = new Error(message);
  return err.stack;
}

module.exports = assert;
