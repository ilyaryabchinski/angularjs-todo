// (function () {

//   "use strict";

//   angular.module("taskList").
//   component("taskList", {
//     templateUrl: "/app/tasks/task-list.template.html",
//     controller: function TaskListController($http, $scope, Task) {
//       $scope.isDone = false;

//       this.orderProp = "deadline";
//       var self = this;

//       Task.getAll().then(function (result) {
//         self.tasks = result;
//       });

//       $scope.sendData = function () {
//         console.log(this);
//         var task = $scope.task;
//         task.isDone = false;

//         Task.post(task).then(function (result) {
//           self.tasks.push(result);
//         });
//       };

//       $scope.done = function ($event) {
//         $event.stopPropagation();
//         var task = this.task;

//         task.isDone = task.isDone ? false : true;
//         Task.update(task.id, {
//           isDone: task.isDone
//         });
//       };

//       $scope.allDone = function () {
//         var i = 0,
//           length = self.tasks.length;

//         for (i; i < length; i++) {
//           self.tasks[i].isDone = self.tasks[i].isDone ? false : true;
//           Task.update(self.tasks[i].id, {
//             isDone: self.tasks[i].isDone
//           });
//         }
//       };

//       $scope.deleteCompleted = function () {
//         var oldTasks = self.tasks;
//         self.tasks = [];

//         angular.forEach(oldTasks, function (task) {
//           if (!task.isDone) {
//             self.tasks.push(task);
//           } else {
//             Task.delete(task.id);
//           }
//         });
//       };

//       $scope.edit = function () {
//         $scope.editTask = this.task;
//         console.log(this.task);
//       };

//       $scope.delete = function () {
//         console.log($scope.editTask);
//         var id = $scope.editTask.id,
//           oldTasks = self.tasks;
//         self.tasks = [];

//         angular.forEach(oldTasks, function (task) {
//           if (task.id != id) {
//             self.tasks.push(task);
//           } else {
//             Task.delete(id);
//           }
//         });
//       };

//       $scope.update = function () {
//         var newTask = $scope.editTask,
//           oldTasks = self.tasks;
//         self.tasks = [];

//         newTask = Object.assign(newTask, $scope.task);

//         console.log(newTask);

//         angular.forEach(oldTasks, function (task) {
//           if (task.id != newTask.id) {
//             self.tasks.push(task);
//           } else {
//             Task.update(newTask.id, newTask);
//             self.tasks.push(newTask);
//           }
//         });
//       };
//     }
//   })
//   .factory("factory", function () {
//     return {
//       searchQuery: ""
//     };
//   });

// })();


(function() {
  'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('taskList')
    .component('taskList', {
      templateUrl: '/app/tasks/task-list.template.html',
      controller: 'TaskListController',
      controllerAs: '$ctrl',
        bindToController: true,
      bindings: {
        Binding: '=',
      },
    });

  // ControllerController.$inject = ['dependency1'];
  // function ControllerController(dependency1) {
  //   var $ctrl = this;
    

  //   ////////////////

  //   $ctrl.$onInit = function() { };
  //   $ctrl.$onChanges = function(changesObj) { };
  //   $ctrl.$onDestroy = function() { };
  // }
})();