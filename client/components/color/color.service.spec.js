'use strict';

describe('Service: color', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var color;
  beforeEach(inject(function (_color_) {
    color = _color_;
  }));

  it('should do something', function () {
    expect(!!color).toBe(true);
  });

});
