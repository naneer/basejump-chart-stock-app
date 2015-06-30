'use strict';

describe('Service: currentDate', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var currentDate;
  beforeEach(inject(function (_currentDate_) {
    currentDate = _currentDate_;
  }));

  it('should do something', function () {
    expect(!!currentDate).toBe(true);
  });

});
