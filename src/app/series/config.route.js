(function() {
    'use strict';

    angular
        .module('app.series')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/series', {
            templateUrl: 'app/series/series.html',
            controller: 'SeriesController',
            controllerAs: 'vm'
        });
    }

})();