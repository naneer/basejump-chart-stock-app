'use strict';

angular.module('workspaceApp')
  .directive('chartStock', [ function () {
    return {
      templateUrl: 'components/chart-stock/directive/chart-stock.html',
      restrict: 'E',
      controller: angular.noop,
      controllerAs: 'chart',
      bindToController: true,
      replace: true,
      scope: {
        series: '=',
        stocks: '='
      },
      link: function (scope, element, attrs, chart) {
        scope.$watch('chart.series', function(n, o){
          if(chart.series.length === chart.stocks.length){
            element.highcharts('StockChart', {

              rangeSelector: {
                    selected: 4
              },

              
              yAxis: {
                plotLines: [{
                  value: 0,
                  width: 2,
                  color: 'silver'
                }]
              },

              title: {
                text: 'Stock IO'
              },

              tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2
              },

              series: chart.series
            });
          }
        }, true);
             
      }
    };
  }]);