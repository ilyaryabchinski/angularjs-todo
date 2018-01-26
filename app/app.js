'use strict';

// Declare app level module which depends on views, and components
angular.module('tasksApp', [
  'ngRoute',
  'ngResource',
  'core.task',
  'taskList'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  // $routeProvider.
  // when('/tasks', {
  //   template: '<task-list></task-list>'
  // })
  // .when('/tasks/:phoneId', {
  //   template: '<phone-detail></phone-detail>'
  // })
  // .otherwise('/tasks');
}]);