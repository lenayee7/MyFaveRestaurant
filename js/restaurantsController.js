
var RestaurantsCtrl = angular.module('RestaurantsCtrl', []);

// var ref = new Firebase("https://myfaverestaurant.firebaseio.com/restaurants");

RestaurantsCtrl.controller('restaurantsIndexCtrl', ['$scope', '$firebaseArray',
	function ($scope, $firebaseArray) {

	  var ref = new Firebase("https://myfaverestaurant.firebaseio.com/restaurants");

	  // create a synchronized array to store a collection
	  $scope.restaurants = $firebaseArray(ref);
	  $scope.orderProp = 'age';

	  $scope.addRestaurant = function() {
	    $scope.restaurants.$add({
	      name: $scope.restaurant.name,
	      cuisine: $scope.restaurant.cuisine,
	      location: $scope.restaurant.location,
	      yelpUrl: $scope.restaurant.yelpUrl,
	      photo: $scope.restaurant.photo,
	      review: $scope.restaurant.review
	    });
	    console.log($scope.restaurants)
	    // clears form
	    $scope.restaurant = {};
		};

	}]);


RestaurantsCtrl.controller('restaurantsShowCtrl', ['$scope', '$stateParams', '$firebaseArray',
	function($scope, $stateParams, $firebaseArray) { 
  	// console.log("hello",  $stateParams)
   var ref = new Firebase("https://myfaverestaurant.firebaseio.com/restaurants");
 	$scope.restaurants = $firebaseArray(ref);
 	
   ref.on("child_added", function(snapshot) {

	  	var restaurant = snapshot.val();
	  	// gets all restaurant id's
	  	// console.log('stateparams', $stateParams.restaurantId);
  		// console.log('key', snapshot.key());
		  if ($stateParams.restaurantId == snapshot.key()) {
		  		$scope.restaurant = {
		  			name: restaurant.name,
		  			cuisine: restaurant.cuisine,
		  			location: restaurant.location,
		  			yelpUrl: restaurant.yelpUrl,
		  			photo: restaurant.photo,
		  			review: restaurant.review
		  		}
		  	console.log('RESTAURANT', $scope.restaurant);
		  }
		});
	}]);

		console.log("controller loaded");

