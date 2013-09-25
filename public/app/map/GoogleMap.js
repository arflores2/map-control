angular.module("mapcontrol")
	.directive('googlemap', function() {

		var _map;

		return {
			restrict: 'E',
			replace: true,
			scope: {},

			template: '<div class="google-map fill"></div>',

			controller: function($scope, $element) {
				
			},

			link: function(scope, element, attributes) {
				_map = new google.maps.Map(element[0], {
					center: new google.maps.LatLng(-34.397, 150.644),
					zoom: 8,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				});
			}
		};
	});