(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entNavbar', entNavbar);

  /** @ngInject */
  function entNavbar($window, $location) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      /** @ngInject */
      controller: function ($scope, $modal) {
        $scope.navbarCollapsed = true;

        $scope.isHome = function () {
          return ($location.path() === '/');
        };

        $scope.openContactForm = function () {
          $modal.open({
            templateUrl: 'app/components/contactForm/contactForm.modal.html',
            controller: 'ContactFormController'
          });
        };
      },
      link: function (scope, element, attrs) {
        var $navbar = $(element).find('nav.navbar');

        $($window).scroll(function() {
          $navbar.toggleClass(
            "active",
            $($window).scrollTop() > 10
          );
        });
      }
    };

    return directive;
  }

})();
