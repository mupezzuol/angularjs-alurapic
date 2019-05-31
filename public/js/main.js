//Criando módulo principal do angular
//Adicionamos uma depência desse módulo, que um outro módulo chamado 'minhasDiretivas'
angular.module('angularpic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);//Desativo a '#'
        
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        //Qualquer URL diferente das de cima, irá para nossa 'home'
        $routeProvider.otherwise({redirectTo: '/fotos'});

    });