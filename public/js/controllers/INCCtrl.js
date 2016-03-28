angular.module('INCCtrl', ['IncomingService','OutgoingService','highcharts-ng']).controller('IncomingOutgoingController', function($scope, INCOMINGINC, OUTGOINGINC, $rootScope) {
	
	$scope.date = "2015" //set standard date to dispaly

	$scope.highchartsNG = {
		options:{
			chart:{
				type: 'column'
			}
		},
		xAxis: {
			categories:["january","febuary","march","april","may","june","july","august","september","november","december"]
		},
		yAxis:{
			title:{
				text: "Tickets"
			}
		},
		series:[],
		title: {
			text: "Incoming And Outgoing Incidients"
		},
		loading:false
	}

	$scope.removeSeries = function(){
		$scope.highchartsNG.series = [];
	}

	$scope.addSeries = function(seriesname,data){
		$scope.highchartsNG.series.push({
			name:seriesname,
			data:[
				data['january'],
				data['febuary'],
				data['march'],
				data['april'],
				data['may'],
				data['june'],
				data['july'],
				data['august'],
				data['oktober'],
				data['november'],
				data['december']
				]
		})
	}

	successFunctionIncoming = function(data){
		$scope.incomingincidents = data;
		console.log('Got INCOMING data, nr of entries : ' + data.length);

		$scope.nrofincomingincidents = {};
		$scope.nrofincomingincidents['january'] = 0;
		$scope.nrofincomingincidents['febuary'] = 0;
		$scope.nrofincomingincidents['march'] = 0;
		$scope.nrofincomingincidents['april'] = 0;
		$scope.nrofincomingincidents['may'] = 0;
		$scope.nrofincomingincidents['june'] = 0;
		$scope.nrofincomingincidents['july'] = 0;
		$scope.nrofincomingincidents['august'] = 0;
		$scope.nrofincomingincidents['september'] = 0;
		$scope.nrofincomingincidents['oktober'] = 0;
		$scope.nrofincomingincidents['november'] = 0;
		$scope.nrofincomingincidents['december'] = 0;

		for (i=0; i<data.length-1;i++){
			switch (data[i].date) {
				case $scope.date+"/01":
					$scope.nrofincomingincidents['january'] += 1;
					break;
				case $scope.date+"/02":
					$scope.nrofincomingincidents['febuary'] += 1;
					break;
				case $scope.date+"/03":
					$scope.nrofincomingincidents['march'] += 1;
					break;
				case $scope.date+"/04":
					$scope.nrofincomingincidents['april'] += 1;
					break;
				case $scope.date+"/05":
					$scope.nrofincomingincidents['may'] += 1;
					break;
				case $scope.date+"/06":
					$scope.nrofincomingincidents['june'] += 1;
					break;
				case $scope.date+"/07":
					$scope.nrofincomingincidents['july'] += 1;
					break;
				case $scope.date+"/08":
					$scope.nrofincomingincidents['august'] += 1;
					break;
				case $scope.date+"/09":
					$scope.nrofincomingincidents['september'] += 1;
					break; 
				case $scope.date+"/10":
					$scope.nrofincomingincidents['oktober'] += 1;
					break;
				case $scope.date+"/11":
					$scope.nrofincomingincidents['november'] += 1;
					break;
				case $scope.date+"/12":
					$scope.nrofincomingincidents['december'] += 1;
					break;
			}
		}

		$scope.addSeries('Incoming', $scope.nrofincomingincidents);

	};

	failureFunctionIncoming = function(data){
		$scope.incomingerror = data;
		console.log('Error: ' + data);
	};

	successFunctionOutgoing = function(data){
		$scope.outgoingincidents = data;
		console.log('Got OUTGOING data, nr of entries : ' + data.length);

		$scope.nrofoutgoingincidents = {};
		$scope.nrofoutgoingincidents['january'] = 0;
		$scope.nrofoutgoingincidents['febuary'] = 0;
		$scope.nrofoutgoingincidents['march'] = 0;
		$scope.nrofoutgoingincidents['april'] = 0;
		$scope.nrofoutgoingincidents['may'] = 0;
		$scope.nrofoutgoingincidents['june'] = 0;
		$scope.nrofoutgoingincidents['july'] = 0;
		$scope.nrofoutgoingincidents['august'] = 0;
		$scope.nrofoutgoingincidents['september'] = 0;
		$scope.nrofoutgoingincidents['oktober'] = 0;
		$scope.nrofoutgoingincidents['november'] = 0;
		$scope.nrofoutgoingincidents['december'] = 0;

		for(i=0;i<data.length-1;i++){
			switch(data[i].date){
				case $scope.date+"/01":
					$scope.nrofoutgoingincidents['january'] += 1;
				case $scope.date+"/02":
					$scope.nrofoutgoingincidents['febuary'] += 1;
				case $scope.date+"/03":
					$scope.nrofoutgoingincidents['march'] += 1;
				case $scope.date+"/04":
					$scope.nrofoutgoingincidents['april'] += 1;
				case $scope.date+"/05":
					$scope.nrofoutgoingincidents['may'] += 1;
				case $scope.date+"/06":
					$scope.nrofoutgoingincidents['june'] += 1;
				case $scope.date+"/07":
					$scope.nrofoutgoingincidents['july'] += 1;
				case $scope.date+"/08":
					$scope.nrofoutgoingincidents['august'] += 1;
				case $scope.date+"/09":
					$scope.nrofoutgoingincidents['september'] += 1;
				case $scope.date+"/10":
					$scope.nrofoutgoingincidents['oktober'] += 1;
				case $scope.date+"/11":
					$scope.nrofoutgoingincidents['november'] += 1;
				case $scope.date+"/12":
					$scope.nrofoutgoingincidents['december'] += 1;
			}
		}

		$scope.addSeries('Outgoing', $scope.nrofoutgoingincidents);
	};

	failureFunctionOutgoing = function(data){
		$scope.outgoingerror = data;
		console.log('Error: ' + data);
	};	

	$scope.setdate = function(data){
		$scope.date = data;
		$scope.removeSeries();
		INCOMINGINC.get(successFunctionIncoming,failureFunctionIncoming, $scope.date);
		OUTGOINGINC.get(successFunctionOutgoing, failureFunctionOutgoing, $scope.date);
	}

	$scope.setdate($scope.date);
});