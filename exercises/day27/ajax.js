<input type="number" id="search">  
<button onclick="getVal();">search</button>
         
         
<script>

          var xhr = new XMLHttpRequest();
console.log("My script has loaded");

xhr.onreadystatechange = function() {
 if(xhr.readyState  == 4 && xhr.status == 200) {
   var strData = xhr.responseText;
   var data = JSON.parse(strData);
   console.log(data["name"]);
   console.log(data["gender"]);
     
 } else if(xhr.readyState  == 4 && xhr.status != 200) {
   console.log(xhr.status);
 }
};
   function getVal(){
       var Search=document.getElementById("search").value;
   
       
   


xhr.open("GET", "http://pokeapi.co/api/v1/pokemon/"+Search, true);
xhr.send();}
</script>