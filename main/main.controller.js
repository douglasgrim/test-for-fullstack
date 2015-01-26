'use strict';

angular.module('fullsassyApp')
  .controller('MainCtrl', function ($scope, $http, socket, CoreService) {
    $scope.awesomeThings = [];
    $scope.name = {name: 'yoyo'};
    $scope.mezzages = [];


    $http.get('/api/mezzages').success( function(mez) {
      $scope.mezzages = mez;
      socket.syncUpdates('mezzage', $scope.mezzages);
    });

    $scope.$watch('mezzages', function(newVal, oldVal){
      console.log('message come in', CoreService.getTime());
    })

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.postMezzage = function() {
      if($scope.mezzage.name === '') return;
      $http.post('/api/mezzages', { name : $scope.mezzage.name + CoreService.getTime()});
      $scope.mezzage.name = '';
    };

    $scope.postDot = function(dot) {
      $http.post('/api/mezzages', { dot: dot, name:'Dot' });
    };

    $scope.dotclick = function( event ) {
      console.log(event);
      $scope.postDot ( {x:event.clientX, y:event.clientY });
    }

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
      socket.unsyncUpdates('mezzage');
      });
  });
