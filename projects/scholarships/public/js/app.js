var ang = angular.module("app", []);
ang.service("Service", function ($http) {
 
    this.getPosts = function () { 
        return $http.get("http://localhost:8000/posts");
    }
    this.getComments = function(id){
        return $http.get("http://localhost:8000/posts/"+id);
    }
 
    this.addPost = function (data) { 
        return $http.post("http://localhost:8000/posts/",data)
    }
     this.deleteData = function (id) { 
        return $http.delete("http://localhost:8000/posts/"+id)
    }
     
      this.likeDisLike = function (id,data) { 
        return $http.put("http://localhost:8000/posts/"+id+'/',data);
    }
      
      this.updatePost = function(id,data){
          return $http.put("http://localhost:8000/posts/"+id+'/',data);
          
      }
      
      this.addComment = function(id, data){
          
          return $http.post("http://localhost:8000/posts/"+id+'/',data);
          
      }




});

ang.controller("ctrl", function ($scope, Service) {
    var tags = [];
    var ppp = [];
    $scope.get = function(){
        console.log('getting data');
        Service.getPosts().then(function(response){
            $scope.posts = response.data;
            ppp = $scope.posts;
            
            
            
        })
    }
    
    $scope.remove = function(id){
        Service.deleteData(id).then(function(response){

            $scope.get();
            
            
        });
        
    }
    
    

    
    
    $scope.addPost = function(){
        var postArr = $scope.post.split(" ");
        //var tags = [];
        for(var i=0 ; i<postArr.length ; i++){
            if(postArr[i][0] == "#"){
                tags.push(postArr[i]);
            }
            
        }
        
        
        
        var data = {post: $scope.post, image:$scope.image, likes:0, disLikes:0, tags};
        Service.addPost(data).then(function(response){
            //$scope.message = response.data;
            $scope.post='';
            $scope.image = '';
            $scope.get();
            
            
        });
        
        
        
        
        
    }
    
  
    
    

    $scope.edit = function(id,i,likes,dislikes){
     var post = $("#"+i).text();
        
        var data = {post:post ,likes:likes, disLikes:dislikes};
         Service.updatePost(id,data).then(function(response){
            //$scope.message = response.data;
            $scope.get();
            
            
        });
        
    }
   
    
    
    

    
    $scope.like = function(id,post,likes,disLikes){
        var data = {post:post, likes:likes+1, disLikes:disLikes};
        Service.likeDisLike(id,data).then(function(response){
            $scope.get();
            
            
            
        })
        
    }
    
     $scope.disLike = function(id,post,likes,disLikes){
        var data = {post:post, likes:likes, disLikes:disLikes+1};
        Service.likeDisLike(id,data).then(function(response){
            $scope.get();
            
            
            
        })
        
    }
     
     
     $scope.getComments = function(id){
         
         Service.getComments(id).then(function(response){
             $scope.comments=response.data.data.comments;
             
         })
         
         
         
     }
     
     
     $scope.addComment= function(id, comment){
         var data = {comment:comment};
         $scope.comment = '';
         
         Service.addComment(id,data).then($scope.getComments(id), function(err){
             console.log('error'+err);
             
         });
         
         
         
     }
     

     
     
     
     $('#postTextArea').keypress(function (event) {
            if (event.which == 13) {
                $('#postTextArea').val('');
                $scope.addPost();
            }
        });
    

     
     
     
     
     
    
//    $scope.update = function(id){
//        var data = {name: $scope.name, age:$scope.age};
//        Service.putData(id, data).then(function(response){
//            $scope.message = 'updated!';
//            $scope.get();
//            
//            
//            
//        })
//        
//        
//        
//        
//        
//        
//    }


});