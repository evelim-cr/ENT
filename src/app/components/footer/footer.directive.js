(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entFooter', entFooter);

  /** @ngInject */
  function entFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html'
    };

    return directive;
  }

})();
