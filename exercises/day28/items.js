function loadData(){
    $.ajax({
        url: "http://api.vschool.io/Yasser/todo/",
        type:"GET"
        success:function(data){
        $(".output").html("");
        for(var i=0; i<data.length; i++){
        $(".output").append("<li id'"+data[i]._id+"'>"data[i].title+"</li>");
    }
    }
    });
}

$(document).ready(function(){
    
    loadData();
    $('#submit').click(addData);
    
});
function addData(){
    var title=$('#text').val();
    console.log(title);
    var data={title:title}
    $.ajax({
        url:"http://api.vschool.io/Yasser/todo/",
        type:"POST",
        
    })
    loadData();
}