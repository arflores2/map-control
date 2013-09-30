angular.module("mapcontrol")
  .directive('googlemap', function() {

    var _map;

    function _clickCallback(marker, callback) {
      return function(event) {
        console.log('click callback', marker);
        callback({marker: marker});
      }
    }

    return {
      restrict: 'E',
      replace: true,
      scope: {
        points: '=',
        center: '=',
        bounds: '=',
        mapZoom: '=',

        onMapCenterchanged: '&',
        onMapBoundschanged: '&',
        onMapClick: '&',
        onMapDblclick: '&',
        onMapDrag: '&',
        onMapDragend: '&',
        onMapDragstart: '&',
        onMapTilesloaded: '&',
        onMapZoomchanged: '&',

        onMarkerClick: '&'
      },

      template: '<div class="google-map fill"></div>',

      controller: function($scope, $element) {
      },

      link: function($scope, $element, attrs) {
        console.log($scope);

        _map = new google.maps.Map($element[0], {
          center: new google.maps.LatLng($scope.center.lat, $scope.center.lon),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        google.maps.event.addListener(_map, 'center_changed', function() {
          $scope.$apply(function() {
            var center = _map.getCenter();
            $scope.center = {
              lat: center.lat(),
              lon: center.lng()
            };
          });
        });

        google.maps.event.addListener(_map, 'bounds_changed', function() {
          $scope.$apply(function() {
            var bounds = _map.getBounds(),
                ne = bounds.getNorthEast(),
                sw = bounds.getSouthWest();
            $scope.bounds = {
              ne: ne.lat() + ', ' + ne.lng(),
              sw: sw.lat() + ', ' + sw.lng()
            };
          });
        });

        google.maps.event.addListener(_map, 'click', function() {
        });

        google.maps.event.addListener(_map, 'dblclick', function() {
        });

        google.maps.event.addListener(_map, 'drag', function() {
        });

        google.maps.event.addListener(_map, 'dragend', function() {
        });

        google.maps.event.addListener(_map, 'tilesloaded', function() {
        });

        google.maps.event.addListener(_map, 'zoom_changed', function() {
        });


        var i, point, latLng, marker;
        for(i = 0, len = $scope.points.length; i < len; ++i) {
          point = $scope.points[i];


          latLng = new google.maps.LatLng(point.lat, point.lon);
          point.position = latLng;
          point.map = _map;
          point.title = point.name;

          marker = new google.maps.Marker(point);

          google.maps.event.addListener(marker, 'click', _clickCallback(marker, $scope.onMarkerClick));
        }
      }
    };
  });