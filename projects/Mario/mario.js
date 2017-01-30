
var count = 0,nb1=0,nb2=0,nb3=0,nb4=0;
totalCoins();
$("#pic1").click(function(){
               
   count++;
   $("#plant").val(count);
   $("#rplant").val(count*6);
  totalCoins();
   });



$("#pic2").click(function(){
   count++;
   $("#beetle").val(count);
   $("#rbeetle").val(count*2);
totalCoins();
   });


$("#pic3").click(function(){
   count++;
   $("#urchin").val(count);
   $("#rurchin").val(count*10);
totalCoins();
   });


$("#pic4").click(function(){
   count++;
   $("#turtle").val(count);
   $("#rturtle").val(count*4);
   totalCoins();

   });
function totalCoins(){
   
    nb1= parseInt($("#rplant").val());
   nb2= parseInt($("#rbeetle").val());
   nb3= parseInt($("#rurchin").val());
   nb4= parseInt($("#rturtle").val());
   $("#total").html(nb1+nb2+nb3+nb4);
}