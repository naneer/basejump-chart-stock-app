'use strict';

describe('Directive: chartStock', function () {

  // load the directive's module and view
  beforeEach(module('workspaceApp'));
  beforeEach(module('components/chart-stock/chart-stock.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chart-stock></chart-stock>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the chartStock directive');
  }));
});