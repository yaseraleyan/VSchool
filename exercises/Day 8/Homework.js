var sum = function (x,y) {
    return x+y
};
console.log (sum (1,2));

var largest = function (x,y,z) {
    if (x>y && x>z) { 
        return "the largest number is:" + x
    };
      if (y>x && y>z)
      { return "the largest number is:" + y
      };
      if (z>x && z>y) { return "the largest number is:" + z};
};
console.log(largest (100,50,75));

var evenOdd = function (t) {
    if (t%2==0) {return "the number is odd"}
    else {
        return "the number is even"
    };
    
}
console.log (evenOdd (7));


var longText = function (p) {
    if (p.length <= 20)
    {
        return p;
    }
   else {
       return p.slice(0,p.length/2);
   }    
}
console.log(longText(" fffff dfsdf sdfsf sd seegsg fffffhgfhf"));