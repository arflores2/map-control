var ne5common = angular.module('ne5common', []);

ne5common.directive('animate', function() {

  var _originalValues = {
    width: null,
    height: null
  }

  function _setOriginalValues($element) {
    _originalValues.width = $element.width();
    _originalValues.height = $element.height();

    _originalValues.paddingLeft = $element.css('padding-left');
    _originalValues.paddingRight = $element.css('padding-right');
  }

  function _show($element) {
    if($element.animate) {
      $element.animate({
        width: _originalValues.width,
        paddingLeft: _originalValues.paddingLeft,
        paddingRight: _originalValues.paddingRight
      });
    }
  }

  function _hide($element) {
    if($element.animate) {
      $element.animate({
        width: 0,
        paddingLeft: 0,
        paddingRight: 0
      });
    } 
  }

  return {
    restrict: 'A',

    link: function($scope, $element, $attrs) {
      _setOriginalValues($element);

      $scope.$watch($attrs.animateShow, function(newValue, oldValue) {
        if(newValue === true) {
          _show($element);
        }
        else {
          _hide($element);
        }
      }, true);
    }
  };
});

