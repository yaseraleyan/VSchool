var students = function(name, grades, result) {
  this.name = name;
  this.grades = grades;
  this.result = [];
};

var firstStudent = new students("Omar", [50, 96, 40, 30], "");
var secondStudent = new students("Radwan", [70, 96, 80, 65], "");
var thirdStudent = new students("Karim", [33, 70, 40, 30], "");
var fourthStudent = new students("Ahmad", [99, 96, 98, 95], "");


console.log(students)



