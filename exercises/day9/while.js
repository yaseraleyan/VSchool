
var str = "bookkeeper larry";
for (var i=0; i<str.length; i++)
    if (str[i]== str[i+1]) {
        console.log (str.slice (i,i+1))
        }
    else {
        return str
    };

