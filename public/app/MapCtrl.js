angular.module("mapcontrol")
	.controller("MapCtrl", function($scope) {

		$scope.map = {
			points: [
				{id: 123, name: "L'Enfant Plaza Metro", lat: 38.885237, lon: -77.021588},
				{id: 124, name: "Waterfront Metro", lat: 38.876551, lon: -77.017296}
			],
			center: {lat: 38.90211704, lon: -77.01692300}
		};

		$scope.markerClick = function(marker) {
			console.log('it got here', marker);
			$scope.$apply(function() {
				$scope.map.marker = marker;
			});
		}
	});