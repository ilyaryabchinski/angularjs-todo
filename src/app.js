'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('tasksApp', [
  'ngRoute',
  'ngResource',
  'core.task',
  'taskList'
]);
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  // $routeProvider.
  // when('/tasks', {
  //   template: '<task-list></task-list>'
  // })
  // .when('/tasks/:phoneId', {
  //   template: '<phone-detail></phone-detail>'
  // });

}]);
app.controller("MainController", function ($scope, factory) {
  $scope.factory = factory;
});