'use strict';

angular.module('workspaceApp')
  .factory('yql', ['$resource', 'currentDate', function ($resource, currentDate) {
    var YQL =  $resource('https://query.yahooapis.com/v1/public/yql', {
    }, {
      get: {
        method: 'GET',
        headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
      }
    });
    var _yql = function(symbol){
      return 'select * from yahoo.finance.historicaldata where symbol = "'+ symbol +
             '"and startDate = "' + currentDate.getYearAgo() +'" and endDate = "' + currentDate.get()  + '"'
    };

    return {
      get: function(symbol){
        return YQL.get({ q: _yql(symbol),
                         format: 'json', 
                         diagnostics: true,
                         env: 'http://datatables.org/alltables.env'}).$promise;
      }
    }
  }]);
