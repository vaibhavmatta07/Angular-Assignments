(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.checkMuch = function () {
    if ($scope.dishes != null && $scope.dishes != '') {
      var dishes = $scope.dishes.replace(/ /g,''); // remove whitespace from input
      var numDishes = 0;
      var validDish = 0;

      for (var c = 0; c <= dishes.length; c++) {
        // if current character is not a comma, the dish exists
        if (dishes.charAt(c) !== ',') {
          if (validDish == 0) {
            validDish = 1;
          }
        } else { // end or comma has been reached
          // increment dish counter, and reset flag
          if (validDish == 1) {
            numDishes++;
            validDish = 0;
          }
        }
      }

      // if numDishes == 0, string consisted entirely of commas
      if (numDishes > 0) {
        if (numDishes < 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      } else {
        $scope.message = "Please enter data first";
      }
    } else {
      $scope.message = "Please enter data first";
    }
  };
}

})();