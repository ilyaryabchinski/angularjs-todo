'use strict';

// Declare app level module which depends on views, and components
angular.module('tasksApp', [
  'ngRoute',
  'tasksApp.view1',
  'tasksApp.view2',
  'tasksApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).controller("TasksController", function ($scope){
  $scope.name = "Ilya";
});
