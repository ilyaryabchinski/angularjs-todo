(function () {
    'use strict';

    angular
        .module('taskList')
        .factory('SearchQueryService', SearchQueryService);

    function SearchQueryService() {
        var service = {
            searchQuery: ""
        };

        return service;

    }
})();