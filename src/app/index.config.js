(function() {
  'use strict';

  angular
    .module('ent')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    //Enable html5mode (pretty urls)
    $locationProvider
      .html5Mode({ enabled:true, rewriteLinks: false })
      .hashPrefix('!');
  }

})();
