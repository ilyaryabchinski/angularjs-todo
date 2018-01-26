'use strict';

angular.module('taskList')
.component("taskList",
{
    templateUrl: "task-list/task-list.template.html",
    controller: function TaskListController (){
        this.tasks = [
            {
                "title": "Build an AngularJS app", 
                "description": "Practice!", 
                "deadline": "2017-02-01",
                "isDone": false 
            }, 
            {
                "title": "Buy a new T-Shirt", 
                "description": "My old T-shirts are old-fashioned", 
                "deadline": "2017-03-01",
                "isDone": false
            }
        ];
        this.orderProp = 'title';
    }
});