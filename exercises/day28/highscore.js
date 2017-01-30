$('#save').click(function(){
   var trash=["laban","7ommos","falafel","za3tar"];
   var name= $('#name').val();
   var game=$('#Game').val();
   var date=$('#date').val();
   var score=$('#score').val();
   var message = '';
   
 
   if ($('#check').is(':checked')) {
       var index = randomNumber(0 , trash.length-1);
       message = trash[index];
       
       
   }
   else
       message = '';
   
   
    var man="<tr class='d'><td>"+name+"</td><td>"+game+"</td><td>"+date+"</td><td>"+score+"</td><td>"+message+"</td></tr>";
   $('#t').append(man);
   
});




function sortH(a, b)
{
   return a.highScore - b.highScore;
}