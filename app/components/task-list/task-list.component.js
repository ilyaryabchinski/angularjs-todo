'use strict';

angular.module('taskList')
.component("taskList",
{
    templateUrl: "components/task-list/task-list.template.html",
    controller: function TaskListController ($http, $scope, factory){
        $scope.factory = factory;

        $http.get("http://localhost:8000/list").
        success(function (result) {
            console.log(result);
            $scope.tasks = result;
        }).
        error(function (result) {
            console.log("Error: " + result);
        });

        this.orderProp = 'deadline';

    }
}).
factory("factory", function(){
  return {
    searchQuery: ""
  };
});