'use strict';

/**
 * @ngdoc function
 * @name learnCodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnCodeApp
 */
angular.module('learnCodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
