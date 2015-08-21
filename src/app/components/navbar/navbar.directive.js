(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entNavbar', entNavbar);

  /** @ngInject */
  function entNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      /** @ngInject */
      controller: function ($scope, $modal) {
        $scope.openContactForm = function () {
          $modal.open({
            templateUrl: 'app/components/contactForm/contactForm.modal.html',
            controller: 'ContactFormController'
          });
        };
      }
    };

    return directive;
  }

})();
