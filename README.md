## 01. Reverese string and catch errors

Complete the reverseString function, it has one parameter s. You must perform the following actions:
. Try to reverse string s using the split, reverse, and join methods.
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an
exception was thrown, this should be the original string.

[reverseStr.js](reverseStr.js)


## 02. Check isPositive number

Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:

[checkNum.js](checkNum.js)

## 03. Convert the code using try...catch.

```js
function reverseString(s) {
typeof s !== "string"
? console.log("s.split is not a function")
: (s = s.split("").reverse().join(""));
console.log(s);
}
```
[tryCatch.js](tryCatch.js)

## 04. Teacher & students

A teacher has created a gradeLabs function that verifies if student programming labs work. This function
loops over an array of JavaScript objects that should contain a student property and runLab property.
The runLab property is expected to be a function containing the student's code. The runLab function is
called and the result is compared to the expected result. If the result and expected results don't match,
then the lab is considered a failure.

```js 
let studentLabs2 = [
{
student: "Blake",
myCode: function (num) {
return Math.pow(num, num);
},
},
{
student: "Jessica",
runLab: function (num) {
return Math.pow(num, num);
},
},
{
student: "Mya",
runLab: function (num) {
return num * num;
},
},
];
gradeLabs(studentLabs2);
```
[gradeLabs.js](gradeLabs.js)


## Regexp 01

- Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:
- Exactly 4 or 6 characters.
- Only numerical characters (0-9).
- No whitespace.


| Input | Output |
| --- | --- |
| myRegExp.test("1234") | true |
| myRegExp.test("45135") | false |
| myRegExp.test("89abc1") | false |
| myRegExp.test("900876") | true |
| myRegExp.test(" 4983") | false |

[Solution](Regexp01.js)

## Regexp 02

```js
const REGEXP = /abc/;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
str.match(REGEXP);
'<a href="/">', '<input type="radio" checked>', "<b>";
```

[Solution](Regexp02.js)
 