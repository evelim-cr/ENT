(function() {
  'use strict';

  angular
    .module('ent')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http) {
	// $scope.events = [];

	$http.get("/assets/data/eventos.json").
		success(function(data) {
			var currentTimestamp = new Date();
			var events = [];
			angular.forEach(data, function (item) {
				item.timestamp = new Date(item.timestamp);
				if (item.timestamp >= currentTimestamp) {
					events.push(item);
				}
			});
			$scope.events = events;
		});

  	$scope.breakpoints = [
	    {
	      	breakpoint: 1200,
	      	settings: {
		        slidesToShow: 3
	      	}
	    },
	    {
	      	breakpoint: 910,
	      	settings: {
		        slidesToShow: 2
	      	}
	    },
	    {
	      	breakpoint: 560,
	      	settings: {
		        slidesToShow: 1
	      	}
	    }
	];
  }
})();
