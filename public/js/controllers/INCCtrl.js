angular.module('INCCtrl', ['IncomingService','OutgoingService']).controller('IncomingOutgoingController', function($scope, INCOMINGINC, OUTGOINGINC) {
	
	$scope.date = "2015" //set standard date to dispaly

	successFunctionIncoming = function(data){
		$scope.incomingincidents = data;
		console.log('Got INCOMING data, nr of entries : ' + data.length);
	};

	failureFunctionIncoming = function(data){
		$scope.incomingerror = data;
		console.log('Error: ' + data);
	};

	successFunctionOutgoing = function(data){
		$scope.outgoingincidents = data;
		console.log('Got OUTGOING data, nr of entries : ' + data.length);
	};

	failureFunctionOutgoing = function(data){
		$scope.outgoingerror = data;
		console.log('Error: ' + data);
	};	

	INCOMINGINC.get(successFunctionIncoming, failureFunctionIncoming, $scope.date);
	OUTGOINGINC.get(successFunctionOutgoing, failureFunctionOutgoing, $scope.date);

});