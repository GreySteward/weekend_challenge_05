myApp.controller('PeopleController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    console.log('People Controller');

    $scope.people = [];
    $scope.dataFactory = DataFactory;
    $scope.message = 'People!';
    $scope.formName = '';

    if($scope.dataFactory.animalData() === undefined) {
        // initial load
        $scope.dataFactory.retrieveData().then(function() {
            $scope.people = $scope.dataFactory.peopleData();
        });
    } else {
        $scope.people = $scope.dataFactory.peopleData();
    }

    $scope.addAnimal = function() {
        $scope.dataFactory.addName($scope.formName);
        $scope.formName = '';
    }

}]);





