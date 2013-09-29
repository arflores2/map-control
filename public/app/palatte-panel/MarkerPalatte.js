angular.module('mapcontrol')
  .directive('markerpalatte', function() {

    return {
      restrict: 'E',
      replace: true,
      scope: {},

      templateUrl: '/app/palatte-panel/MarkerPalatteTpl.html',

      link: function() {}
    }

  });