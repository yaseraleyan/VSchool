var omega = '\u03A9';
var alpha = '\u03B1';
var newArray= [[]];

for(var i=0; i<10 ; i++) {
    newArray.push ('\n');
for (var j=0; j<10 ; j++) {
    if (j%2 == 0)
    {newArray.push(omega)}
   
    else {newArray.push(alpha)}
}};
console.log(newArray.join(' '));