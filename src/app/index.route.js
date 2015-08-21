(function() {
  'use strict';

  angular
    .module('ent')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .when('/:slug', {
        templateUrl: 'app/post/post.html',
        controller: 'PostController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
