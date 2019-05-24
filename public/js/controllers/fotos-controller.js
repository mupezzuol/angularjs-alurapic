//Criação de um Controller atráves de um módulo (alurapic) já existente, caso quisesse criar um outro módulo eu deveria usar '[]' array vazio
//Controller nomenclatura é igual utiliada em Java, porém nossos '.js' deve ser tudo minusculo separado por '-' 
//Toda variavel dentro de uma 'function' é privada, ela não é acessado fora do escopo da função, por isso usamos o '$scope'
//$scope -> É usado para disponibilizarmos dados para a VIEW
angular.module('angularpic').controller('FotosController', function($scope) {

    //Criando Object JavaScript
    $scope.foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});