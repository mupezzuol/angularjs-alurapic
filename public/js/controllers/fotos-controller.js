//Criação de um Controller atráves de um módulo (angularpic) já existente, caso quisesse criar um outro módulo eu deveria usar '[]' array vazio
//Controller nomenclatura é igual utiliada em Java, porém nossos '.js' deve ser tudo minusculo separado por '-' 
angular.module('angularpic').controller('FotosController', function ($scope, $http) {

    //Criando Array Vazio -> ng-repeat="foto in fotos" fotos é a variavel que retornamos para a página e usamos para fazer o 'for'
    $scope.fotos = [];
    $scope.filtro = '';//two-way data binding, consigo usar para escrita/leitura pois uso o Filter na VIEW (usando como filtro)
    $scope.mensagem = '';

    $http.get('/v1/fotos')
        .success(function (retorno) {
            $scope.fotos = retorno;//Não precisa fazer 'retorno.data'
        })
        .error(function (erro) {
            console.log(erro);
        });

    $scope.remover = function (foto) {
        /// URL -> v1/fotos/IDdaFotoQueDesejamosApagar
        $http.delete('/v1/fotos/' + foto._id)
            .success(function () {
                var indiceDaFoto = $scope.fotos.indexOf(foto);//Pego meu índice respectivo a foto removida
                $scope.fotos.splice(indiceDaFoto, 1);//Deleto a foto a partir do índice X e peço para remover 1 elemento que seria a foto respectiva
                $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
            })
            .error(function () {
                $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
            });
    };

});
