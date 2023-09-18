'use strict';

/**
 * @ngdoc overview
 * @name learnCodeApp
 * @description
 * # learnCodeApp
 *
 * Main module of the application.
 */


//Setup for underscore
var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._;
}]);


angular.module('learnCodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'underscore'
  ]);
