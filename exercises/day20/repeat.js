var students = [
 { 
    Name: "Omar",
    grades: [50, 96, 40, 30], 
    result: ''},
    { 
    Name: "Radwan",
    grades: [70, 96, 80, 65], 
    result: ''},
    { 
    Name: "Karim",
    grades: [33, 70, 40, 30], 
    result: ''},
    { 
    Name: "Ahmad",
    grades: [99, 96, 98, 95], 
    result: ''},
    
    
];

  var sum = 0;
  for (var i=0 ; i<students.length ; i++){
  for (var j=0 ; j<students.length ; j++){
        sum = sum+students[i].grades[j];
      }
      var average= sum/students[i].grades.length;
        if (average=>60) { 
    students[i].result= "pass";
  }
    else {
   students.result= "fail";
    }
      students[i].total = sum
      sum=0
  };
for (var i=0 ; i<students.length ; i++){
    for (var j=0 ; j<students.length; j++){
        if (students[i].total>students[j].total){
            var sort = students[j];
            students[j]= students[i];
            students[i]=sort;
        }
        
    }
}
console.log(students)



