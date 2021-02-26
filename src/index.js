import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
var newNumbers1 = numbers.map(function (x) {
  return x * 2;
});

//Filter - Create a new array by keeping the items that return true.
var newNumbers2 = numbers.filter(function (x) {
  return x > 10;
});

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers3 = numbers.reduce(function (x, y) {
  return x + y;
});

//Find - find the first item that matches from an array.
var newNumbers4 = numbers.find(function (x) {
  return x > 10;
});

//FindIndex - find the index of the first item that matches.
var newNumbers5 = numbers.findIndex(function (x) {
  return x > 10;
});

var meanings = emojipedia.map(function (x) {
  return x["meaning"].substring(0, 100);
});

console.log(
  newNumbers1,
  newNumbers2,
  newNumbers3,
  newNumbers4,
  newNumbers5,
  meanings
);
