/* global $:false */
(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entBackgroundSlider', entBackgroundSlider);

  /** @ngInject */
  function entBackgroundSlider($interval) {
    var directive = {
      restrict: 'A',
      scope: {
        'entBackgroundSlider': '='
      },
      link: linkFn
    };

    function linkFn(scope, element, attrs) {
      var interval = attrs.backgroundInterval || 1000;

      var currentBgIdx = 0;

      $interval(function () {
        currentBgIdx = (currentBgIdx+1) % scope.entBackgroundSlider.length;
        $(element).css("background-image", "url("+scope.entBackgroundSlider[currentBgIdx]+")");
      }, interval);
    }

    return directive;
  }

})();
