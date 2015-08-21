(function() {
  'use strict';

  angular
    .module('ent')
    .controller('PostController', PostController);

  /** @ngInject */
  function PostController($scope, $routeParams, postsService) {
    postsService.getPost($routeParams.slug)
      .then(function (post) {
        $scope.post = post;
      });
  }
})();
