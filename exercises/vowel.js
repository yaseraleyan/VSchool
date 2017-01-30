function countVowel(name){
   count=0;
   for(var i=0 ;i<name.length ;i++){
       if(name[i]=='a'||name[i]=='A'||name[i]=='e'||name[i]=='E'||name[i]=='i'||name[i]=='I'||name[i]=='u'||name[i]=='U'||name[i]=='o'||name[i]=='O'){
          count++;
      }}
       return count;
   
}
function countConstant(name){
  count=0;
   for(var i=0 ;i<name.length ;i++){if(name[i]!='a'&&name[i]!='A'&&name[i]!='e'&&name[i]!='E'&&name[i]!='i'&&name[i]!='I'&&name[i]!='u'&&name[i]!='U'&&name[i]!='o'&&name[i]!='O'){
          count++;
      }}
       return count;
   }
function countSpecialCases(name){
  count=0;
   for(var i=0 ;i<name.length ;i++){if(name[i]!='a'&&name[i]!='A'&&name[i]!='e'&&name[i]!='E'&&name[i]!='i'&&name[i]!='I'&&name[i]!='u'&&name[i]!='U'&&name[i]!='o'&&name[i]!='O'){
          count++;
      }}
       return count;
   }


console.log(countConstant("Radwan")+" Constant");
console.log(countVowel("Radwan")+" Vwoel");