(function() {
  'use strict';

  angular
    .module('ent')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $location) {
    $rootScope.isHome = function () {
      return ($location.path() === '/');
    };
  }

})();
