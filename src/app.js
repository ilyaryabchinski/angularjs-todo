(function () {
  'use strict';

  angular
    .module('tasksApp', [
      'core.task',
      'taskList'
    ])
    .config(configure)
    .controller("MainController", MainController);

  MainController.$inject = ['SearchQueryService'];
  configure.$inject = ['$locationProvider']

  function MainController(SearchQueryService) {
    var vm = this;
    vm.searchQuery = SearchQueryService.searchQuery;

  };

  function configure($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
})();