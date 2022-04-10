// Exercise: Level 1
// Start of the Assignment
// Declare a variable named challenge and assign it to an initial value 'Moringa is great'.
let challenge = 'Moringa is great'; 
// Print the string on the browser console using console.log()
console.log(challenge);
// Print the length of the string on the browser console using console.log()
console.log(challenge.length);
// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring (0,7));
// Slice out the phrase Days Of JavaScript from Moringa is great.

// Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));
// Split the string into an array using split() method
console.log(challenge.split());
// Split the string Moringa is great at the space using split() method
console.log(challenge.split(" "));
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const bigTech = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(bigTech.split(","));
// Change Moringa is great to 30 Days Of Python using replace() method.
let python = "30 Days Of Python";
console.log(challenge.replace("Moringa is great", python));
// What is character at index 15 in 'Moringa is great' string? Use charAt() method.
console.log(challenge.charAt(15));
// What is the character code of J in 'Moringa is great' string using charCodeAt()
console.log(challenge.charCodeAt(13));
// Use indexOf to determine the position of the first occurrence of a in Moringa is great
console.log(challenge.indexOf("a"));
// Use lastIndexOf to determine the position of the last occurrence of a in Moringa is great.
console.log(challenge.lastIndexOf("a"));
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf("because"));
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.lastIndexOf("because"));
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.search("because"));
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Moringa is great '.
const challenge2 = " Moringa is great ";
console.log(challenge2.trim(" "));
// Use startsWith() method with the string Moringa is great and make the result true
console.log(challenge.startsWith("Moringa"));
// Use endsWith() method with the string Moringa is great and make the result true
console.log(challenge.endsWith("great"));
// Use match() method to find all the a’s in Moringa is great
console.log(challenge.match("a"));
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, 'Moringa is great'
console.log(challenge.concat("! 30 Days of ", "JavaScript"));
// Use repeat() method to print Moringa is great 2 times
console.log(challenge.repeat(2));

//Exercise Level 2
//printing out a paragraph
const par = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.\n";
console.log(par);
//printing mother teresa's quote
const mteresa = "Love is not patronizing and charity isn't about pity, it is about love.\n Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(mteresa);
//comparing datatypes
let a = "10";
let b = 10;
console.log(typeof a === b ? "True" : parseInt(a));
console.log(a);
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = "9.81";
console.log(typeof num === b ? "True" : parseFloat(b));
console.log(num); //converted to a number

// Check if 'on' is found in both python and jargon
const name1 = "python";
const name2 = "jargon";
console.log(name1.includes("on"));
console.log(name2.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
const wishfulThinking = "I hope this course is not full of jargon."
console.log(wishfulThinking.includes("jargon"));
// Generate a random number between 0 and 100 inclusively.
const randNum = Math.floor(Math.random() * 101); 
console.log(randNum);
// Generate a random number between 50 and 100 inclusively.
const randNum2 = Math.floor(Math.random() * 101)+50;
console.log(randNum2);
// Generate a random number between 0 and 255 inclusively.
const randNum3 = Math.floor(Math.random() * 256);
console.log(randNum3);
// Access the 'JavaScript' string characters using a random number.

//Generate Random Strings using numbers, letters, and symbols
//first, we declare the characters

function generateRandomString(length) {
  let result = " ";
  const randomString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-";
  const randomStringLength = randomString.length;
  for (let i = 0; i < length; i++) {
    result += randomString.charAt(Math.floor(Math.random() * randomStringLength));
  }
  return result;
}
console.log(generateRandomString(15));
// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// function numPattern (){
//   let c = [1,2,3,4,5];
//   for (i=0;i<length;i++){
//     result = math.pow
//   }
// } 
// let d = [1,2,3];
// Math.pow(c,d);
// console.log(Math.pow(c[i],d[i]));

// Use substr to slice out the phrase because because because from the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
const sentSlice = "You cannot end a sentence with because because because is a conjunction";
console.log(sentSlice.substring(31,54));

// Exercise Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
// Count the number of word love in this sentence.
const loves ='Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loves.split("love").length);

// Use match() to count the number of all because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
let repeat = /because/gi;
console.log(sentSlice.match(repeat));