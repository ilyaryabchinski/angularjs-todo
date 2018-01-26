'use strict';

describe('taskList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('taskList'));
  
    // Test the controller
    describe('TaskListController', function() {
      var ctrl;
  
      beforeEach(inject(function($componentController) {
        ctrl = $componentController('taskList');
      }));
  
      it('should create a 2 tasks', function() {
        expect(ctrl.phones.length).toBe(2);
      });
  
      it('should set a default value for the `orderProp` model', function() {
        expect(ctrl.orderProp).toBe('title');
      });
  
    });
  
  });