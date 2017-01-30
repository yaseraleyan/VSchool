var readLineSync = require("readline-sync");

var firstNumber = readLineSync.question ("Enter first Number: ");
var secondNumber = readLineSync.question ("Enter second Number: ");
var thirdNumber = readLineSync.question ("Enter third Number: ");


var biggest ;
if (firstNumber > secondNumber && secondNumber > thirdNumber)
biggest = firstNumber;
else if (secondNumber > firstNumber && secondNumber > thirdNumber)
    biggest=secondNumber;
else if (thirdNumber > firstNumber && firstNumber > secondNumber)
   biggest=thirdNumber;


var middle ;
if (firstNumber > secondNumber && secondNumber > thirdNumber)
middle = secondNumber;
else if (secondNumber > firstNumber && firstNumber > thirdNumber)
    middle= firstNumber;
else if (firstNumber > thirdNumber && thirdNumber > secondNumber)
    middle = thirdNumber;



var smallest;
if (secondNumber > thirdNumber && thirdNumber > firstNumber)
smallest= firstNumber;
else if (secondNumber > firstNumber && firstNumber > thirdNumber)
    smallest=thirdNumber;
else if (thirdNumber > firstNumber && firstNumber > secondNumber)
    smallest= secondNumber;


console.log("Biggest: " + biggest + ", Middle: " + middle + ", Smallest: "+ smallest);
    