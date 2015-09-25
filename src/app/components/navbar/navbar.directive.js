/* global $:false */
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

        $scope.openContactForm = function () {
          $modal.open({
            templateUrl: 'app/components/contactForm/contactForm.modal.html',
            controller: 'ContactFormController',
            controllerAs: 'form'
          });
        };
      },
      link: function (scope, element) {
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
