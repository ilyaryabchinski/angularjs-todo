(function() {
  'use strict';

  angular
    .module('taskList')
    .component('taskList', {
      transclude: true,
      templateUrl: '/app/tasks/task-list.template.html',
      controller: 'TaskListController',
      controllerAs: '$ctrl',
      bindToController: true,
      bindings: {
        defaultTasks: '<',
        defaultDeadline: '@',
        defaultSort: '@',
        onAllTasksDone: '&'
      },
    });


})();