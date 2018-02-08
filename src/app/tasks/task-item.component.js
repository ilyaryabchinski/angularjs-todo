(function() {
    'use strict';

    angular
        .module('taskItem')
        .component('taskItem', {
            require: {
                parentCtrl: '^^taskList'
            },
            transclude: true,
            templateUrl: '/app/tasks/task-item.template.html',
            bindings: {
                task:"="
            },
        });
})();