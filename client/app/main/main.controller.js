'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', [ '$scope', '$http', 'socket', function ($scope, $http, socket) {
    var ctrl = this;
    ctrl.stocks = [];

    $http.get('/api/stocks').success(function(stocks) {
      ctrl.stocks = stocks;
      socket.syncUpdates('stock', ctrl.stocks);
    });

    ctrl.addStock = function() {
      if(ctrl.newStock === '') {
        return;
      }
      if(ctrl.stocks.some(function(stock){
        return stock.symbol === ctrl.newStock;
      })){ return; };
      
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
