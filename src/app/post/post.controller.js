(function() {
  'use strict';

  angular
    .module('ent')
    .controller('PostController', PostController);

  /** @ngInject */
  function PostController($scope, $routeParams) {
    var posts = {
      "amm": { title: "AMM" },
      "desbravadores": { title: "Desbravadores" },
      "jovem": { title: "Jovem" },
      "lar_e_familia": { title: "Lar e Família" },
      "mulher": { title: "Mulher" },
      "musica": { title: "Dádiva Coral" },
      "codigo_aberto": { title: "Código Aberto" },
      "eai": { title: "E@I?!" },
      "esta_escrito": { title: "Está Escrito" },
      "fotografia": { title: "Fotografia" },
      "hebraico": { title: "Hebraico" },
      "ingles": { title: "Inglês" },
    };

    $scope.post = posts[$routeParams.slug];
  }
})();
