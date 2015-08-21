(function() {
  'use strict';

  angular
    .module('ent')
    .controller('ContactFormController', ContactFormController);

  /** @ngInject */
  function ContactFormController($scope, $modalInstance) {
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }
})();
