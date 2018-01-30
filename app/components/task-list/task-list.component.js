'use strict';

var app = angular.module('taskList')
app.component("taskList", {
    templateUrl: "components/task-list/task-list.template.html",
    controller: function TaskListController($http, $scope, factory) {
        $scope.factory = factory;

        this.orderProp = 'deadline';
        var self = this;

        $http.get("/tasks/tasks.json").
        then(function onSuccess(result) {
                self.tasks = result.data;
            },
            function onError(params) {
                console.log("Can't get the list of tasks!");
            });

        $scope.sendData = function () {

            var task = $scope.task;

            $http.post("/tasks/tasks.json", task).
            then(function onSuccess(result) {
                    console.log("Task was successfully added!");
                },
                function onError(params) {
                    console.log("Can't add new Task!");
                }
            );

        }

    }
});
app.factory("factory", function () {
    return {
        searchQuery: ""
    };
});