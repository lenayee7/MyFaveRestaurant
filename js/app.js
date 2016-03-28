'use strict';

var app = angular.module('myFaveRestaurant', ['firebase',
	'ui.router',
	'ngResource',
	'RestaurantsCtrl'
	// 'restaurantServices'
]);

app.config( RestaurantConfig );

function RestaurantConfig ( $locationProvider, $stateProvider, $urlRouteProvider ) {

	$stateProvider
	.state('restaurants-index', {
		url: '/restaurants',
		templateUrl: "templates/restaurants-index.html",
		controller: "restaurantsIndexCtrl"
	});
	//this allows us to use routes without hash params!
  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
  // for any unmatched URL redirect to /
	$urlRouteProvider.otherwise("/");

};
