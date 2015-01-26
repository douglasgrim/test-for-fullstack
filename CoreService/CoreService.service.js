'use strict';

angular.module('fullsassyApp')
  .service('CoreService', function () {

    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var startTime = new Date().getTime();
    return {
    	getTime:function(){
    		return new Date().getTime() - startTime;
    	}
    }
  });
