//Criando uma diretiva para usarmos.. (componente)
angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {

        var ddo = {};//Diretiva retorna um DDO (Directive Definition Object)

        //Uma diretiva em Angular pode ser usada como Atributo, Elemento ou Comentário
        ddo.restrict = "AE";//Atributo + Elemento... as chamadas dessas duas formas estarão corretas

        //Habilito para que os filhos das tags da diretiva seja mantido
        //Se não tudo que tiver dentro dessa diretiva ele sobrescreve pro que tem no 'templateUrl'
        ddo.transclude = true;

        //Dentro da minha diretiva vou pegar dados do meu escopo da diretiva respectiva
        //Se minha angular expression da página for o mesmo nome, eu posso utilizar somente '@'
        ddo.scope = {
            titulo: '@titulo'
        };

        //Adicionamos qual será o template/conteúdo dessa diretiva, quem chama-la implementará isso
        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    })
    .directive('minhaFoto', function () {

        var ddo = {};

        ddo.restrict = "AE";

        //os atributos tem o mesmo nome, somente @ já funciona
        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return ddo;
    });