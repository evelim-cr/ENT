(function() {
  'use strict';

  angular
    .module('ent')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, eventsService, postsService) {
    eventsService.getEvents()
      .then(function (events) {
        $scope.events = events;
      });

    postsService.getPosts({filters: {type: "post"}})
      .then(function (posts) {
        $scope.posts = posts;
      });

    $scope.breakpoints = [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1
        }
      }
    ];
  }

})();
