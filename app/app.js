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

// app.run(function ($httpBackend) {
//   console.log("Started");
//   var tasks = [{
//       "title": "ABuild an AngularJS app",
//       "description": "Practice!",
//       "deadline": "01/03/2017",
//       "isDone": false
//     },
//     {
//       "title": "Buy a new T-Shirt",
//       "description": "My old T-shirts are old-fashioned",
//       "deadline": "11/02/2017",
//       "isDone": false
//     }
//   ];

//   $httpBackend.whenGET("/list").respond(200, tasks);
//   $httpBackend.expectGET("/list");
//   $httpBackend.whenGET(/^\/components\//).passThrough();
// });