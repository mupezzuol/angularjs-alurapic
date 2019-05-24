//Criação de um Controller atráves de um módulo (angularpic) já existente, caso quisesse criar um outro módulo eu deveria usar '[]' array vazio
//Controller nomenclatura é igual utiliada em Java, porém nossos '.js' deve ser tudo minusculo separado por '-' 
angular.module('angularpic').controller('FotosController', function($scope, $http) {

    //Criando Array Vazio -> ng-repeat="foto in fotos" fotos é a variavel que retornamos para a página e usamos para fazer o 'for'
    $scope.fotos = [];

    $http.get('/v1/fotos')
    .success(function(retorno) {
        console.log(retorno);
        $scope.fotos = retorno;//Não precisa fazer 'retorno.data'
    })
    .error(function(erro) {
        console.log(erro);
    });

});
