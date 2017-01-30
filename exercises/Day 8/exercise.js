var lowerFuntion = function (var1, var2){
    if (var1 < var2){
        console.log("the lower number is : " + var1);
    } else{
        console.log("the lower number is : " + var2);
    }
};
lowerFuntion(51,9);
  

var monkey1 = function(x,y){
    if((x==true && y==true) || (x==false && y==false)){
     console.log (true)}
    else {
        console.log(false);
    }
    };
monkey1 (true,true);
monkey1 (false, false);
monkey1 (false, true);
monkey1 (true, false);