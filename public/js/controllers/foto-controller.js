angular.module('angularpic')
    .controller('FotoController', function ($scope, $http, $routeParams) {

        //two-way data binding
        $scope.foto = {};
        $scope.mensagem = '';


        //Se fotoId tiver valor retorna TRUE, ou seja, estamos com uma foto vindo na requisicao de busca por id, bate no back-end e retorna a foto
        //Caso seja nulo não entra no filtro, pois será uma nova foto
        if ($routeParams.fotoId) {
            $http.get('/v1/fotos/' + $routeParams.fotoId)
                .success(function (foto) {
                    $scope.foto = foto;
                })
                .error(function (erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível obter a foto'
                });
        }


        //Quando meu form for submetido 'ng-submit="submeter()"' será chamado essa função
        //SE meu formulário tiver OK ele entra na condição...
        //SE fotoId for TRUE(tiver dado) ele chamará o PUT, para fazer a alteração
        //CASO CONTRÁRIO, ele fará o POST, ou seja, cadastra uma nova foto
        //$http.put('/v1/fotos/' + $scope.foto._id, $scope.foto) -> Eu passo a URL com ID + os dados que quero alterar, ou seja, meu objeto foto
        $scope.submeter = function () {
            if ($scope.formulario.$valid) {
                if ($routeParams.fotoId) {
                    $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                        .success(function () {
                            $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada com sucesso.';
                        })
                        .error(function (erro) {
                            console.log(erro);
                            $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
                        });
                } else {
                    $http.post('/v1/fotos', $scope.foto)
                        .success(function () {
                            $scope.foto = {};
                            $scope.mensagem = 'Foto cadastrada com sucesso.';
                        })
                        .error(function (erro) {
                            console.log(erro);
                            $scope.mensagem = 'Não foi possível cadastrar a foto';
                        })
                }
            }
        };

    });