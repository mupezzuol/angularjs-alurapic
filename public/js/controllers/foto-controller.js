angular.module('angularpic')
    .controller('FotoController', function ($scope) {

        //two-way data binding
        $scope.foto = {};

        //Quando meu form for submetido 'ng-submit="submeter()"' será chamado essa função
        $scope.submeter = function () {
            console.log($scope.foto);
        };

    });