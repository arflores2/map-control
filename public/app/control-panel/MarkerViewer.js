angular.module('mapcontrol')
	.directive('markerviewer', function() {

		return {
			restrict: 'E',
			replace: true,
			scope: {
				marker: '=',
			},

			templateUrl: '/app/control-panel/MarkerViewTpl.html',

			link: function($scope, $element, $attrs) {
			}
		}	
	})