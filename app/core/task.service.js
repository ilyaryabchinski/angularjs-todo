'use strict';

angular.
module('core.task').
factory('Task', function ($http) {
  var endpoint = "http://localhost:3000/tasks/";

  return {
    getOne: function (id) {
      return $http.get(endpoint + id).
      then(function onSuccess(result) {
          task = result.data;
          console.log(result.data);
          return result.data;
        },
        function onError(params) {
          console.log("Can't get a task!");
          return null;
        });
    },

    getAll: function () {
      return $http.get(endpoint).
      then(function onSuccess(result) {
          console.log(result.data);
          return result.data;
        },
        function onError(params) {
          console.log("Can't get tasks!");
          return null;
        });
    },

    update: function (id, data) {
      return $http.patch(endpoint + id, data).
      then(function onSuccess(result) {
          console.log("Task was successfully updated");
        },
        function onError(params) {
          console.log("Can't update the task!");
        });
    },

    post: function (data) {
      return $http.post(endpoint, data).
      then(function onSuccess(result) {
          console.log("Task has been successfully added!");
          return result.data;
        },
        function onError(params) {
          console.log("Can't add new Task!");
        }
      );
    },

    delete: function (id) {
      return $http.delete(endpoint + id).
      then(function onSuccess(result) {
          console.log("Task has been successfully deleted!");
          return result.data;
        },
        function onError(params) {
          console.log("Can't delete new Task!");
        }
      );
    }

  }
});