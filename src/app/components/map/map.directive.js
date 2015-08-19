(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entMap', entMap);

  /** @ngInject */
  function entMap() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/map/map.html',
    };

    return directive;
  }

})();