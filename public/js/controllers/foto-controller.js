angular.module('angularpic')
    .controller('FotoController', function ($scope, $http) {

        //two-way data binding
        $scope.foto = {};
        $scope.mensagem = '';

        //Quando meu form for submetido 'ng-submit="submeter()"' será chamado essa função
        $scope.submeter = function () {
            if ($scope.formulario.$valid){
                $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso!';
                })
                .error(function(erro){
                    $scope.mensagem = 'Algo deu errado! Não foi possível cadastrar a foto.';
                    console.log(erro);
                });
            }

        };

    });