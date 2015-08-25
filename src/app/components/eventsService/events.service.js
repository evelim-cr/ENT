(function() {
  'use strict';

  angular
    .module('ent')
    .service('eventsService', eventsService);

  /** @ngInject */
  function eventsService($log, $http) {
    function getEvents(options) {
      return $http.get("/assets/data/eventos.json")
        .then(function(response) {
          var currentTimestamp = new Date();
          var events = [];
          angular.forEach(response.data, function (item) {
            item.timestamp = new Date(item.timestamp);
            if (item.timestamp >= currentTimestamp) {
              events.push(item);
            }
          });
          return events;
        })
        .catch(function (error) {
          $log.error('XHR Failed for getEvents.\n' + angular.toJson(error.data, true));
        });
    }

    return {
      getEvents: getEvents
    };
  }

})();
