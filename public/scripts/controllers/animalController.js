myApp.controller('AnimalController', ['$scope', '$http', function($scope, $http) {
    $scope.data = {};

    $scope.animal= "";


    $scope.storeAnimal = function() {
        var animalType = $scope.animal;
        console.log(animalType);
        petFinder(animalType);
    };

    function petFinder(animalType) {
        console.log(animalType);
        //api key
        var key = '497e876e57e808b290190688905fccd4';

        if(animalType === undefined) {
            animalType = 'cat';
        }


        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + animalType;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animal = response.data.petfinder.pet;
                console.log($scope.animal);
            }
        );
    }

    petFinder();

    $scope.addFavorites = function(animal) {
        console.log(animal);
        $http.post('/favanimal', animal);
    };

}]);