(function () {
    "use strict";

    angular
        .module("taskList")
        .controller("TaskListController", TaskListController);

    TaskListController.$inject = ["$http", "Task", "SearchQueryService"];

    function TaskListController($http, Task) {
        var vm = this;

        vm.sendData = sendData;
        vm.done = done;
        vm.allDone = allDone;
        vm.deleteCompleted = deleteCompleted;
        vm.edit = editTask;
        vm.delete = deleteTask;
        vm.update = updateTask;

        vm.isDone = false;
        vm.tasks = [];

        activate();

        ////////////////

        function activate() {
            return getTasks().then(function (result) {
                console.log("Tasks has been successfully recieved");
            });
        }

        function getTasks() {
            return Task.getAll().then(function (result) {
                vm.tasks = result;
            });
        }

        function sendData(task) {
            task.isDone = false;

            Task.post(task).then(function (result) {
                vm.tasks.push(result);
            });
        }

        function done($event, task) {
            $event.stopPropagation();
            task.isDone = task.isDone ? false : true;
            Task.update(task.id, {
                isDone: task.isDone
            });
        }

        function allDone() {
            var i = 0,
                length = vm.tasks.length;

            for (i; i < length; i++) {
                vm.tasks[i].isDone = vm.tasks[i].isDone ? false : true;
                Task.update(vm.tasks[i].id, {
                    isDone: vm.tasks[i].isDone
                });
            }
        }

        function deleteCompleted() {
            var oldTasks = vm.tasks;
            vm.tasks = [];
            angular.forEach(oldTasks, function (task) {
                if (!task.isDone) {
                    vm.tasks.push(task);
                } else {
                    Task.delete(task.id);
                }
            });
        }

        function editTask(task) {
            vm.editTask = task;
        }

        function deleteTask() {
            console.log(vm.editTask);
            var id = this.editTask.id,
                oldTasks = vm.tasks;
            vm.tasks = [];

            angular.forEach(oldTasks, function (task) {
                if (task.id != id) {
                    vm.tasks.push(task);
                } else {
                    Task.delete(id);
                }
            });
        }

        function updateTask(newData) {
            var changedTask = vm.editTask,
                oldTasks = vm.tasks;
            vm.tasks = [];

            changedTask = Object.assign(changedTask, newData);

            console.log(changedTask);

            angular.forEach(oldTasks, function (task) {
                if (task.id != changedTask.id) {
                    vm.tasks.push(task);
                } else {
                    Task.update(changedTask.id, changedTask);
                    vm.tasks.push(changedTask);
                }
            });
        }
    }
})();