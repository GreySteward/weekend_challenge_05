var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/findpet', {
            templateUrl: '/views/templates/findpet.html',
            controller: 'AnimalController'
        })
        .when('/favoritepet', {
            templateUrl: '/views/templates/favoritepet.html',
            controller: 'FavoritesController'
        })
        .otherwise({
            redirectTo: 'findpet'
        });
}]);