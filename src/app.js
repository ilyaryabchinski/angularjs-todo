(function () {
  'use strict';

  angular
    .module('tasksApp', [
      'core.task',
      'taskList',
      'taskItem'
    ])
    .config(configure)
    .controller("MainController", MainController);

  MainController.$inject = ['SearchQueryService'];
  configure.$inject = ['$locationProvider']

  function MainController(searchQueryService) {
    var vm = this;
    vm.searchQueryService = searchQueryService;


  };

  function configure($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
})();