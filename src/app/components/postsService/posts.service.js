(function() {
  'use strict';

  angular
    .module('ent')
    .service('postsService', postsService);

  /** @ngInject */
  function postsService($log, $http) {
    function getPosts(options) {
      return $http.get("/assets/data/posts.json")
        .then(function (response) {
          if (!options || !options.filters) {
            return response.data;
          }

          var result = [];

          angular.forEach(response.data, function (item) {
            var f = Object.keys(options.filters);
            for (var i=0; i<f.length; i++) {
              var filter_key = f[i];
              if (item[filter_key] !== options.filters[filter_key]) {
                return;
              }
            }

            result.push(item);
          });

          return result;
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
