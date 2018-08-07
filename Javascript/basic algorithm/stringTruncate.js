//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//Remember to use Read-Search-Ask if you get stuck. Write your own code.
'use strict'

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0,num) + '...';
    } else {
        return str.slice(0,num);
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);