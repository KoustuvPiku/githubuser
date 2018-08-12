angular.module("searchModule",['animations','serviceModule']).
controller("searchCtrl",function($scope,$http,$location,userService){
    $scope.key="";
    userService.external=false;
    $scope.search=function(){
        var finalUrl="https://api.github.com/search/users?q="+$scope.key;
        console.log("clicked");
        $http.get(finalUrl)
            .success(function(response){
                $scope.data=response.items;
                console.log($scope.data);
            });
    };
    // $scope.a= $http.get("https://avatars0.githubusercontent.com/u/1?v=4")
    //     .success(function(response){
    //      console.log(response);
    //      return response;
    //     });
    // console.log($scope.a.png);
    $scope.getImage=function(index){

            var id="#"+index;
            var clazz = {};
            if(index%2==0){
                clazz['even-class']=true;
            }
            else
                clazz['odd-class']=true;
            return clazz;

    };
    $scope.openUser=function(data){
        userService.userData=data;
        $http.get(data.url).
            success($scope.callBack);

        // console.log(userService.userData);

    }
    $scope.callBack=function(response){
        userService.metaData=response;

        $location.path("/user")
    }

});
angular.module('animations', ['ngAnimate']);