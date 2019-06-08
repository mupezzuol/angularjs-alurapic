//Criação de um Controller atráves de um módulo (angularpic) já existente, caso quisesse criar um outro módulo eu deveria usar '[]' array vazio
//Controller nomenclatura é igual utiliada em Java, porém nossos '.js' deve ser tudo minusculo separado por '-' 
angular.module('angularpic').controller('FotosController', function ($scope, recursoFoto) {

    //Criando Array Vazio -> ng-repeat="foto in fotos" fotos é a variavel que retornamos para a página e usamos para fazer o 'for'
    $scope.fotos = [];
    $scope.filtro = '';//two-way data binding, consigo usar para escrita/leitura pois uso o Filter na VIEW (usando como filtro)
    $scope.mensagem = '';

    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

    $scope.remover = function(foto) {

        recursoFoto.delete({fotoId: foto._id}, function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        });
    };

});
