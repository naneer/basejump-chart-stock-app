'use strict';

angular.module('workspaceApp')
  .factory('Color', function () {
    // Service logic
    // ...

    var color = [ 
                  '#26529A', 
                  '#6DC77E',
                  '#8D1740',
                  '#6E4768',
                  '#223143',
                  '#3462C6',
                  '#D55C40',
                  '#773DAD',
                  '#BE80FF',
                  '#CFDC02'
                ];

    // Public API here
    return {
      get: function (index) {
        return color[index % 10];
      }
    };
  });
