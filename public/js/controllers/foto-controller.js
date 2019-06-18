angular.module('angularpic')
    .controller('FotoController', function ($scope, recursoFoto, $routeParams, cadastroDeFotos) {

        //two-way data binding
        $scope.foto = {};
        $scope.mensagem = '';

        if ($routeParams.fotoId) {
            recursoFoto.get({ fotoId: $routeParams.fotoId }, function (foto) {
                $scope.foto = foto;
            }, function (erro) {
                $scope.mensagem = 'Não foi possível obter a foto';
            });
        }


        $scope.submeter = function () {

            if ($scope.formulario.$valid) {
                cadastroDeFotos.cadastrar($scope.foto)
                    .then(function (dados) {
                        $scope.mensagem = dados.mensagem;
                        if (dados.inclusao) $scope.foto = {};
                        // o broadcasting foi removido
                    })
                    .catch(function (erro) {
                        $scope.mensagem = erro.mensagem;
                    });
            }
        };


    });