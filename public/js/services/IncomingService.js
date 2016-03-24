angular.module('IncomingService', []).factory('INCOMINGINC', ['$http', function($http) {
	return {
		get : function(onSuccuess,onFailure){
			return $http.get('/api/INCOMINGINC').
			success(onSuccuess).
			error(onFailure);
		}
	}	
}]);