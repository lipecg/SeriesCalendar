(function() {
    'use strict';

    angular
        .module('app', [
            // Angular modules.
            'ngRoute',

            // Third party modules.
            'firebase',

            // Custom modules.
            'app.landing',
            'app.series'
        ])
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.otherwise({
        redirectTo: '/'
        });
    }

})();
