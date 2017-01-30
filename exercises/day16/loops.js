var evenArray = [];
var oddArray = [];

var createEvenArray = function (highestNum) {
    for (i=0 ; i<=highestNum; i++) {
        if (i % 2 ==0) {
            return evenArray.push(i)
        }
        else {
            return oddArray.push(i)
        }
    }
};