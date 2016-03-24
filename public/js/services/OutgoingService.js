angular.module('OutgoingService', []).factory('OUTGOINGINC', ['$http', function($http) {
	return {
		get : function(onSuccuess,onFailure,date){
			return $http.get('/api/OUTGOINGINC/'+date).
			success(onSuccuess).
			error(onFailure);
		}
	}	
}]);