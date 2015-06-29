'use strict';

angular.module('workspaceApp')
  .directive('unique', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ctrl) {
        ctrl.$validators.unique = function(modelValue, viewValue) {
          return !scope.ctrl.stocks.some(function(stock){
            return stock.symbol === viewValue;
          });
        };
      }
    };
  });