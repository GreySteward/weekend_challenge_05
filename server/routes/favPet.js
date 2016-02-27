myApp.controller('PeopleController', ['$scope', '$http, ''DataFactory', function($scope, $http, DataFactory) {
    console.log('People Controller');

    $scope.message = 'People Controller!';
    $scope.people = [];
    $scope.personName = '';
    $scope.dataFactory = DataFactory;

    $scope.people = $scope.dataFactory.peopleData();

    $scope.addPerson = function() {
        console.log($scope.personName);
        $scope.dataFactory.addName($scope.personName);

        $scope.personName = '';

        //$scope.people = $scope.dataFactory.peopleData();
    }

}]);