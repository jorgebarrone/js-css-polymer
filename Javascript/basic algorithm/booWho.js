//Check if a value is classified as a boolean primitive. Return true or false.

//Boolean primitives are true and false.

//Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (typeof bool == 'boolean') {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
  }
  
  booWho(true); 