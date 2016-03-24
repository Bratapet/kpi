// This module ties the application together
angular.module('dnocKpi', 
	['ngRoute', 
	'appRoutes', 
	'MainCtrl', 
	'INCCtrl', 
	'IncomingService',
	'OutgoingService']);