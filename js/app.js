'use strict';

var app = angular.module('myFaveRestaurant', ['firebase',
	'ui.router',
	'ngResource',
	'RestaurantsCtrl'
	// 'restaurantServices'
]);

app.config( RestaurantConfig );

function RestaurantConfig (  $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('/restaurants');

	$stateProvider
	.state('restaurants', {
		url: '/restaurants',
		templateUrl: 'templates/restaurants-index.html',
		controller: "restaurantsIndexCtrl"
	})
	.state('restaurants-show', {
		url: '/restaurants/:restaurantId',
		templateUrl: 'templates/restaurants-show.html',
		controller: "restaurantsShowCtrl"
	});
	//this allows us to use routes without hash params!
  // $locationProvider.html5Mode({
  //     enabled: true,
  //     requireBase: false
  // });
  // for any unmatched URL redirect to /

};




