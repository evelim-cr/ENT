(function() {
  'use strict';

  angular
    .module('ent')
    .controller('ContactFormController', ContactFormController);

  /** @ngInject */
  function ContactFormController($modalInstance, $http, $log) {
    var vm = this;

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    vm.submit = function () {
      var data = {
        name: vm.name,
        email: vm.email,
        subject: vm.subject,
        message: vm.message
      };

      $http.post('http://localhost:5000/contact', data)
        .then(function (res) {
          console.log(res);
          $modalInstance.close();
        })
        .catch(function (err) {
          console.log(err.data.message);
        });
    }
  }
})();
