
var RestaurantsCtrl = angular.module('RestaurantsCtrl', []);

RestaurantsCtrl.controller('restaurantsIndexCtrl', ['$scope', '$firebaseArray',
	function ($scope, $firebaseArray) {

	  var ref = new Firebase("https://myfaverestaurant.firebaseio.com/restaurants");

	  // create a synchronized array to store a collection
	  $scope.restaurants = $firebaseArray(ref);

	  $scope.addRestaurant = function() {
	    $scope.restaurants.$add({
	      name: $scope.restaurant.name,
	      cuisine: $scope.restaurant.cuisine
	    });
	    // clears form
	    $scope.restaurant = {};
		};

	}]);






		console.log("controller loaded");

