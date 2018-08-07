//Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

//Remember to use Read-Search-Ask if you get stuck. Write your own code.
'use strict';

function titleCase(str) {
    let str1 = str.toLowerCase();
    let myStr = '';
    let cap = 0;
    for (let i = 0;i < str1.length;i++) {
        if (cap == 0) {
            myStr = myStr + str1[i].toUpperCase();
            cap = 1;
        } else {
            myStr = myStr + str1[i];
        }
        if (myStr[i] == ' ') {
            cap = 0;
        }
    }
    //console.log(myStr);
    return myStr;
  }
  
  titleCase("I'm a little tea pot");


