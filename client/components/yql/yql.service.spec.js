'use strict';

describe('Service: yql', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var yql;
  beforeEach(inject(function (_yql_) {
    yql = _yql_;
  }));

  it('should do something', function () {
    expect(!!yql).toBe(true);
  });

});
