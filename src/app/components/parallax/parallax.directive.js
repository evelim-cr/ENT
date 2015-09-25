(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entParallax', entParallax);

  /** @ngInject */
  function entParallax($window) {
    var directive = {
      restrict: 'A',
      scope: {
        parallaxCss: '@',
        parallaxInitVal: '@',
        parallaxRatio: '@'
      },
      link: linkFunc
    };

    function linkFunc(scope, element) {
      var cssKey,
          cssValue,
          isSpecialVal,
          parallaxCssVal,
          parallaxRatio,
          parallaxInitVal,
          cssValArray;

      parallaxCssVal = scope.parallaxCss ? scope.parallaxCss : 'top';
      cssValArray = parallaxCssVal.split(':');
      cssKey = cssValArray[0];
      cssValue = cssValArray[1];

      isSpecialVal = cssValue ? true : false;
      if (!cssValue) {
        cssValue = cssKey;
      }

      parallaxRatio = scope.parallaxRatio ? +scope.parallaxRatio : 1.1;
      parallaxInitVal = scope.parallaxInitVal ? +scope.parallaxInitVal : 0;

      element.css(cssKey, parallaxInitVal + 'px');

      function _onScroll() {
        var resultVal;
        var calcVal = $window.pageYOffset * parallaxRatio + parallaxInitVal;

        if (isSpecialVal) {
          resultVal = '' + cssValue + '(' + calcVal + 'px)';
        } else {
          resultVal = calcVal + 'px';
        }
        element.css(cssKey, resultVal);
      }

      $window.addEventListener('scroll', _onScroll);
    }

    return directive;
  }

})();
