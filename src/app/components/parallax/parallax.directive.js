(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entParallax', entParallax);

  /** @ngInject */
  function entParallax($window) {
    var directive = {
      restrict: 'A',
      link: linkFunc
    };

    function linkFunc(scope, element, attrs) {
      var cssKey,
          cssValue,
          isSpecialVal,
          parallaxCssVal,
          parallaxRatio,
          parallaxInitVal,
          cssValArray;

      parallaxCssVal = attrs.parallaxCss ? attrs.parallaxCss : 'top';
      cssValArray = parallaxCssVal.split(':');
      cssKey = cssValArray[0];
      cssValue = cssValArray[1];

      isSpecialVal = cssValue ? true : false;
      if (!cssValue) {
        cssValue = cssKey;
      }

      parallaxRatio = attrs.parallaxRatio ? +attrs.parallaxRatio : 1.1;
      parallaxInitVal = attrs.parallaxInitVal ? +attrs.parallaxInitVal : 0;

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
