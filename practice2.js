//Using arrow functions
const playMusic = (music) => {
  return "Playing some " + music;
};
console.log(playMusic("Jazz"));
// old way
const playMuzic = function (muzic){
    return "Playing some "+ muzic;
}
console.log(playMuzic("Jazz"));

// filter () method
function isGreater(element, index, array) {
  return element >= 10;
}
let testElemets = [12, 5, 8, 130, 44].filter(isGreater);
console.log("Successful test Values : " + testElemets);

//check word length using filter () method
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const output = words.filter((word) => word.length > 6);
console.log(output);

//Functions can be passed arguments,
function razzle(engineer = "Justine", target = "woke") {
  console.log(`${engineer} is sharp and ${target}!`);
}
console.log(razzle("Kenyansa", "eloquent"));

//Function-level scope
function outer(greeting, msg = "It's a fine day to continue learning") {
  // 2: The argument ("Hello") is saved in outer's greeting parameter. The other parameter, msg, is set to a default value.
  const innerFunction = function (name, lang = "Python") {
    // 3: It expects two arguments, to be stored in the parameters name and lang,
    // and lang is assigned the default value of "Python".
    // The function expression itself is saved in the local variable innerFunction.
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
  // 4: Inside innerFunction we make use of its parameters, name and lang,
  // as well as the greeting and msg parameters defined in innerFunction's containing (parent) function, outer.
  // innerFunction has access to those variables via the scope chain.

  return innerFunction("Justine", "JavaScript"); 
  // 5: Finally, inside outer, we invoke innerFunction, 
  // passing arguments that get stored in innerFunction's name and lang parameters.
}
console.log(outer("Hello"));// 1: We call outer, passing "Hello" as an argument.

// Demo for scope chain
function demoChain(swahiliGreeting) {
  const part1 = "engineer";
  return function () {
    const part2 = "Kenyansa";
    return function () {
      console.log(`${part1.toUpperCase()} ${part2}! ${swahiliGreeting}`);
    };
  };
}

console.log(demoChain("Habari ya asubuhi")()());
