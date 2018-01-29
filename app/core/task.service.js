'use strict';

angular.
  module('core.task').
  factory('Task', ['$resource',
    function($resource) {
      return $resource('tasks/tasks.json', {}, {
      });
    }
  ]);