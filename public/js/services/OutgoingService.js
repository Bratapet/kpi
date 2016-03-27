angular.module('OutgoingService', []).factory('OUTGOINGINC', ['$http', function($http) {
	return {
		get : function(onSuccuess,onFailure,date){
			return $http.post('/api/OUTGOINGINC/', {date:date}).
			success(onSuccuess).
			error(onFailure);
		}
	}	
}]);