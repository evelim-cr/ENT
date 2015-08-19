(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entNavbar', entNavbar);

  /** @ngInject */
  function entNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;
  }

})();
