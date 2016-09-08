'use strict';

/**
* @ngdoc function
* @name odaChallengeApp.controller:OrderDownloadCtrl
* @description
* # OrderDownloadCtrl
* Controller of the odaChallengeApp
*/
angular.module('odaChallengeApp')

.controller('OrderDownloadCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state){

    $scope.page = {
        title: 'Commandes',
        subtitle: 'Liste'
    };

    var currentId = $state.params.id;

    $http.get('http://localhost:8000/admin/orders/'+currentId+'/download?token='+$rootScope.user.token).then(
      function(response) {
          console.log(response.data);
          $scope.download = response.data.data;
      },
      function(response) {
        console.log(response);
      });



      $scope.formatDate = function(date){
              var dateOut = new Date(date);
              return dateOut;
        };

}])
;
