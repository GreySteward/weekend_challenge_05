myApp.factory('DataFactory', ['$http', function($http){
    var data = ['Kris', 'Antoinette'];
    var colors = ['Azule', 'Tangerine', 'Baby Blue'];

    //PRIVATE
    var getData = function(){
        return data;
    };

    var getColors = function () {
        return colors;
    };

    var addPerson = function(name) {
        data.push(name);
    };

    //PUBLIC
    var publicApi = {
        peopleData: function(){
            return data;
        },
        addName: function(name) {
            addPerson(name);
        },

        returnColor: function () {
            return colors;
        }

    };

    return publicApi;
}]);