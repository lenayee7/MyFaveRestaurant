
angular.module('myFaveRestaurant')
	.controller('RestaurantsCtrl', function ($scope, $firebaseArray) {
		// this.restaurants = Restaurantquery();
		  // change to your application URL
			// $scope.restaurants = [1,2,3];
	  var ref = new Firebase("https://myfaverestaurant.firebaseio.com/");
	  // create a synchronized array to store a collection
	  $scope.restaurants = $firebaseArray(ref);

	  $
		console.log("controller loaded");
	});