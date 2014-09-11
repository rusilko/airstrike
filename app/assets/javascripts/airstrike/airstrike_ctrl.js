(function () {
  "use strict";
  angular.module("app").controller('airstrikeCtrl', function($scope){
    var lastShot = null;

    $scope.fire = function(coordinates) {
      lastShot = coordinates;
      console.log(coordinates);
    };

    $scope.status = function() {
      if (lastShot === null) {
        return "You may fire when you ready."
      } else if (lastShot === 'A1') {
        return "Hit!"
      } else {
        return "Miss."
      }
    };

  });
})();
