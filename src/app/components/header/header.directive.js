(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entHeader', entHeader);

  /** @ngInject */
  function entHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html'
    };

    return directive;
  }

})();
