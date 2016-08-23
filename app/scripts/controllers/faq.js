'use strict';

/**
 * @ngdoc function
 * @name odaChallengeApp.controller:FaqCtrl
 * @description
 * # FaqCtrl
 * Controller of the odaChallengeApp
 */
angular.module('odaChallengeApp')
  .controller('FaqCtrl', ['$scope','$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('$viewContentLoaded', function(event) {
      $http.get('http://127.0.0.1:6969/faq.json').then(function successCallback(response) {
          console.log(response.data)
           $scope.questionList = response.data;
           //console.log($scope.questionList)
        }, function errorCallback(response){

        });
    });

  }]);
