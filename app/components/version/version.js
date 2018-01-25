'use strict';

angular.module('tasksApp.version', [
  'tasksApp.version.interpolate-filter',
  'tasksApp.version.version-directive'
])

.value('version', '0.1');
