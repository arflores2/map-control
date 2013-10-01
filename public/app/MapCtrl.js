angular.module("mapcontrol")
  .controller("MapCtrl", function($rootScope, $scope) {

    var _safeApply = function(fn) {
      var phase = $rootScope.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        $scope.$apply(fn);
      }
    }

    $scope.ne5 = {
      toggle: function(namespace, key) {
        if($scope.hasOwnProperty(namespace) && $scope[namespace].hasOwnProperty(key)) {
          // example: $scope.controlPanel.show = !$scope.controlPanel.show;
          $scope[namespace][key] = !$scope[namespace][key]
        } 
      }
    };

    $scope.map = {
      points: [
        {id: 123, name: "L'Enfant Plaza Metro", lat: 38.885237, lon: -77.021588},
        {id: 124, name: "Waterfront Metro", lat: 38.876551, lon: -77.017296}
      ],
      center: {lat: 38.90211704, lon: -77.01692300},

    };

    $scope.controlPanel = {
      show: true
    };

    $scope.palattePanel = {
      show: false
    };

    $scope.markers = {
      collection: [],
      add: function(marker) {
        _safeApply(function() {
          $scope.markers.collection.push(marker);
        });
      },
      click: function(marker) {
        console.log('ctrl', 'click', marker);
        _safeApply(function() {
          $scope.map.marker = marker;
        });
      }
    };
  });