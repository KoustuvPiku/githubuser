angular.module("userModule",['serviceModule']).
    controller("userCtrl",function($scope,$http,$location,userService){

        if(userService.external)
           $location.path("/");
    $scope.details=false;
        $scope.user=userService.userData;
        // $scope.metaData=userService.metaData;
        console.log(userService.metaData);
        $scope.getData=function(property){
            return userService.metaData[property];
        };
    $scope.getRepo=function(){
            return userService.metaData['repos_url'];
    };
    $scope.getFollowers=function(){
        $http.get(userService.metaData['followers_url']).
        success(function(response){
            $scope.details=true;
            $scope.data=response;
            console.log( $scope.data);
        });
    };
    $scope.getUser=function(){
        return userService.metaData['html_url'];
    }

});