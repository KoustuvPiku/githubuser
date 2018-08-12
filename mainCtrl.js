var mainApp=angular.module("mainApp",['searchModule','ngRoute','userModule','serviceModule']);
mainApp.config(['$routeProvider',function($routeProvider,userService) {
    $routeProvider.when("/", {
        templateUrl: "home.html",

    }).
    when("/search",
        {
        templateUrl: "searchPage.html",
        controller: "searchCtrl"
    }).
    when("/user", {
        templateUrl: "user.html",
        controller: "userCtrl"
    })
     .otherwise({redirectTo: "/"})
}]);
mainApp.controller("mainCtrl",function ($scope,$location,) {
    $scope.openSearech=function(){
        $location.path("/search");
    }

});