'use strict';

describe('Service: CoreService', function () {

  // load the service's module
  beforeEach(module('fullsassyApp'));

  // instantiate service
  var CoreService;
  beforeEach(inject(function (_CoreService_) {
    CoreService = _CoreService_;
  }));

  it('should do something', function () {
    expect(!!CoreService).toBe(true);
  });

});
