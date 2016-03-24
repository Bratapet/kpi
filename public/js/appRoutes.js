angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
	
		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/inc', {
			templateUrl: 'views/inc.html',
			controller: 'IncomingOutgoingController'
		});

	$locationProvider.html5Mode(true);

}]);