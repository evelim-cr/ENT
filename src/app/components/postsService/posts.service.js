(function() {
  'use strict';

  angular
    .module('ent')
    .service('postsService', postsService);

  /** @ngInject */
  function postsService($log, $http) {
    function getPosts() {
      return $http.get("/assets/data/posts.json")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
        });
    }

    function getPost(slug) {
      return $http.get("/assets/data/posts.json")
        .then(function (response) {
          var found;
          angular.forEach(response.data, function (post) {
            if (post.slug === slug) {
              found = post;
            }
          });
          return found;
        })
        .catch(function (error) {
          $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
        });
    }

    return {
      getPosts: getPosts,
      getPost: getPost
    };
  }

})();
