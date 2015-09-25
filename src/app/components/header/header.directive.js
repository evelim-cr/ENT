(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entHeader', entHeader);

  /** @ngInject */
  function entHeader() {
    var directive = {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/header/header.html',
      controller: HeaderController,
      controllerAs: 'header'
    };

    /** @ngInject */
    function HeaderController() {
      var vm = this;

      vm.backgrounds = [
        "/assets/images/bg.jpg",
        "/assets/images/lemuel.jpg",
        "/assets/images/curso-informatica.jpg"
      ];
    }

    return directive;
  }

})();
