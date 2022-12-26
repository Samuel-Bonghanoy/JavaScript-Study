"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you are a millenial`;
      console.log(str);

      function add(a, b) {
        //block scoped in strict mode
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
  }

  printAge();
  //   console.log(str);
  return age;
}

const firstName = "Samuel";
calcAge(1991);
