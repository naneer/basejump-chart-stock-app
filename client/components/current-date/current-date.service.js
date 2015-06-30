'use strict';

angular.module('workspaceApp')
  .factory('currentDate', function () {
    var date = new Date();
    return {
      get: function () {
        return date.getFullYear()  + "-" +  ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
      },
      getYearAgo: function(years) {
        (years) ? "" : years = 1;
        return (date.getFullYear() - years) + "-" +  ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
      },
      getJanOne: function(){
        return date.getFullYear() + "-01-01";
      }
    };
  });