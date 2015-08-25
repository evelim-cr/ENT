(function() {
  'use strict';

  angular
    .module('ent')
    .config(config)
    .value('duScrollDuration', 1000);

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
