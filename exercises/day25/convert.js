
var str=[];
function convert (x) {
    for (var i=x ; i>10 ; i= math.floor(i/2)) {
        if (i%2 ==0) {
            str.unshift(0);
        }
    else if (i%2==1){
        str.unshift (1);
    }
}
}
convert(12)
console.log(str);