angular.module('mapcontrol')
	.directive('markerviewer', function() {

		return {
			restrict: 'E',
			replace: true,
			scope: {
				mapBounds: '=',
				mapCenter: '='
			},

			templateUrl: '/app/control-panel/StatsViewTpl.html',

			link: function($scope, $element, $attrs) {
				console.log($scope);
			}
		}	
	})