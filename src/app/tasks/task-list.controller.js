(function () {
    "use strict";

    angular
        .module("taskList")
        .controller("TaskListController", TaskListController);

    TaskListController.$inject = ["$http", "Task"];

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

        function sendData() {
            console.log(this);
            var task = vm.task;
            task.isDone = false;

            Task.post(task).then(function (result) {
                vm.tasks.push(result);
            });
        }

        function done($event) {
            $event.stopPropagation();
            var task = vm.task;

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

        function editTask() {
            vm.editTask = vm.task;
            console.log(vm.task);
        }

        function deleteTask() {
            console.log(this.editTask);
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

        function updateTask() {
            var newTask = this.editTask,
                oldTasks = vm.tasks;
            vm.tasks = [];

            newTask = Object.assign(newTask, this.task);

            console.log(newTask);

            angular.forEach(oldTasks, function (task) {
                if (task.id != newTask.id) {
                    vm.tasks.push(task);
                } else {
                    Task.update(newTask.id, newTask);
                    vm.tasks.push(newTask);
                }
            });
        }
    }
})();