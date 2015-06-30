'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', [ '$scope', '$http', 'socket', 'yql', 'Color', function ($scope, $http, socket, yql, Color) {
    var ctrl = this;
    ctrl.stocks = [];
    ctrl.series = [];
    var counter = 0;
    
    var yqlCallback = function(event, stock){
      if(event === "created"){
        var query = yql.get(stock.symbol);
        query.then(function(data){
          var query = data.query;
          if(query.results === null) { return; }
          ctrl.series.push(
            { 
              name: stock.symbol,
              data: query.results.quote.map(function(quote){
                return [ new Date(quote.Date).getTime(), parseFloat(quote.Close) ]
              }).sort(),
              color: Color.get(counter)
            }
          );
          counter++;
        });
      } else if(event === "deleted"){
        var index = ctrl.series.map(function(obj, index){
          if(obj.name === stock.symbol){ return index; }
        }).filter(isFinite);
        index.map(function(idx){ ctrl.series.splice(idx, 1) });
      }
    };

    $http.get('/api/stocks').success(function(stocks) {
      ctrl.stocks = stocks;
      ctrl.stocks.map(function(stock){
        return yqlCallback("created", stock);
      });
      
      socket.syncUpdates('stock', ctrl.stocks, function(event, item, array){
        return yqlCallback(event, item);
      });
    });

    ctrl.addStock = function() {
      $http.post('/api/stocks', { symbol: ctrl.newStock.toUpperCase() });
      ctrl.newStock = '';
      $scope.form.$setPristine();
    };

    ctrl.deleteStock = function(stock) {
      $http.delete('/api/stocks/' + stock._id);
    };
  
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('stock');
    });
  }]);
