(function() {
  'use strict';

  angular
    .module('ent')
    .directive('entPorDoSol', entPorDoSol);

  /** @ngInject */
  function entPorDoSol() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/porDoSol/porDoSol.html',
      controller: PorDoSolController
    };

    /** @ngInject */
    function PorDoSolController($scope, $http, SunCalc) {
      $scope.date = Date.today().next().friday();
      $scope.cidades = [];

      $http.get("/assets/data/cidades.json").
        success(function(data) {
          $scope.cidades = data;
        });

      $scope.cidade = {
        "nome": "Curitiba",
        "uf": "PR",
        "lon":-49.264622,
        "lat":-25.419547
      };

      $scope.$watch('cidade', function () {
        var times = SunCalc.getTimes($scope.date, $scope.cidade.lat, $scope.cidade.lon);
        $scope.horario = times.sunset;

        // invalid date
        if (isNaN($scope.horario.getTime())) {
          $scope.horario = null;
        }
      }, true);
  	}

    return directive;
  }

})();
