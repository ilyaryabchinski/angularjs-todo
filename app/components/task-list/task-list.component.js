'use strict';

var app = angular.module('taskList')
app.component("taskList", {
    templateUrl: "components/task-list/task-list.template.html",
    controller: function TaskListController($http, $scope, factory) {
        $scope.factory = factory;
        $scope.isDone = false;

        this.orderProp = 'deadline';
        var self = this;

        $http.get("http://localhost:3000/tasks").
        then(function onSuccess(result) {
                self.tasks = result.data;
            },
            function onError(params) {
                console.log("Can't get the list of tasks!");
            });

        $scope.sendData = function () {

            var task = $scope.task;
            task.isDone = false;

            $http.post("http://localhost:3000/tasks", task).
            then(function onSuccess(result) {
                    console.log("Task was successfully added!");
                    self.tasks.push(task);
                },
                function onError(params) {
                    console.log("Can't add new Task!");
                }
            );

        }


        $scope.done = function () {
            var task = this.task;
            task.isDone = true;
            console.log(task)
        }

    }
});
app.factory("factory", function () {
    return {
        searchQuery: ""
    };
});