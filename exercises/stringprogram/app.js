var readlineSync = require("readline-sync");  
//var food = readlineSync.question("what is your favorite food :"); 
//console.log("my favorite food is: "+food);

 
//var text = readlineSync.question("enter your text to change letter mode :"); 
//console.log("you text now : "+text.toUpperCase());

//var haha = readlineSync.question("I will know how much letters you will enter haha:");
//console.log("your letters is : "+haha.length);


//console.log(text.concat(food, haha));

var half = readlineSync.question("I will return to you last half of your enter if it up to 20 letters:");
if ( half.length >20)
    {console.log("your text is:"+ half.slice(half.length/2))};
if ( half.length <20)
    {console.log("your text is:"+ half)};

