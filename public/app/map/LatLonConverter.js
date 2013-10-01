angular.module('mapcontrol')
  .factory('LatLonConverter', function() {
    var LatLonConverter = function(map) {
      this.setMap(map);
    }

    LatLonConverter.prototype = new google.maps.OverlayView();
    LatLonConverter.prototype.draw = function() {};

    LatLonConverter.prototype.fromPxToLatLon = function(x, y) {
      var projection = this.getProjection(),
          point,
          latLon;

      point = new google.maps.Point(x, y);
      latLon = projection.fromDivPixelToLatLng(point);
      return latLon;
    }

    LatLonConverter.prototype.fromLatLontoPx = function(latLon) {
      var projection = this.getProjection(),
          point;

      point = projection.fromLatLonToDivPixel(latLon);
      return point;
    }

    return LatLonConverter;
  });