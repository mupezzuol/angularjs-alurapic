angular.module('angularpic')
    .controller('FotoController', function ($scope, $http) {

        //two-way data binding
        $scope.foto = {};

        //Quando meu form for submetido 'ng-submit="submeter()"' será chamado essa função
        $scope.submeter = function () {
            if ($scope.formulario.$valid){
                $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    console.log('Foto cadastrada com sucesso!');
                })
                .error(function(erro){
                    console.log(erro);
                });
            }

        };

    });