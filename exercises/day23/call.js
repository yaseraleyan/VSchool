var names = ["omar", "radwan", "anas", "sundus", "akram", "hiba", "aamer", "ragheed","jacob", "haitham"];
var docall = function (name) {
    console.log ("you call:" + name)
};
var dontcall = function (name) {
    console.log ("you don't call:" + name)
};
var stext = function (name) {
    console.log ("you send text to:" + name)
};

var action = function (name, docall, dontcall, stext)


for (var i = 0 ; i<names.length; i++) {
    
    if (names[i].length %2 ==0) {
        docall(names[i])
        ;}
        else if (names[i].length %2 ==1) {
        dontcall(names[i])
        ;}
        else if (names[i].charAt.toLowerCase==="a") {
        stext(names[i])
        ;}
}
action(names, docall, dontcall, stext);