'use strict';

/**
 * @ngdoc function
 * @name learnCodeApp.controller:HostCtrl
 * @description
 * # HostCtrl
 * Controller of the learnCodeApp
 */
angular.module('learnCodeApp')
  .controller('HostCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
