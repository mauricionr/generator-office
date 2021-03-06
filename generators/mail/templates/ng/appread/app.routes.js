(function () {
  'use strict';

  var officeAddin = angular.module('officeAddin');

  // load routes
  officeAddin.config(['$routeProvider', routeConfigurator]);

  function routeConfigurator($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'appread/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
})();