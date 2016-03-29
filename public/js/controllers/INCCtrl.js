angular.module('INCCtrl', ['IncomingService','OutgoingService','highcharts-ng']).controller('IncomingOutgoingController', function($scope, INCOMINGINC, OUTGOINGINC, $rootScope) {
	
	$scope.date = "2015" //set standard date to dispaly
	$scope.selectedmonth = "january"; // set standard month
	var topnumber = 5; // set amount of senders and receivers to display
	
	$scope.topreceivers = {};
	$scope.topreceivers['january'] = {};
	$scope.topreceivers['febuary'] = {};
	$scope.topreceivers['march'] = {};
	$scope.topreceivers['april'] = {};
	$scope.topreceivers['may'] = {};
	$scope.topreceivers['june'] = {};
	$scope.topreceivers['july'] = {};
	$scope.topreceivers['august'] = {};
	$scope.topreceivers['september'] = {};
	$scope.topreceivers['oktober'] = {};
	$scope.topreceivers['november'] = {};
	$scope.topreceivers['december'] = {};

	$scope.topsenders = {}; //create top senders
	$scope.topsenders['january'] = {};
	$scope.topsenders['febuary'] = {};
	$scope.topsenders['march'] = {};
	$scope.topsenders['april'] = {};
	$scope.topsenders['may'] = {};
	$scope.topsenders['june'] = {};
	$scope.topsenders['july'] = {};
	$scope.topsenders['august'] = {};
	$scope.topsenders['september'] = {};
	$scope.topsenders['oktober'] = {};
	$scope.topsenders['november'] = {};
	$scope.topsenders['december'] = {};

	$scope.highchartsNG = {
		options:{
			chart:{
				type: 'column',
			},
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
		topcontrib:[],
		title: {
			text: "Incoming and Outgoing Incidients"
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
				],
			events:{
				click:function(e){
					$scope.selectedmonth = e.point.category;
					$scope.$apply();
				}
			}
		});
	}

	successFunctionIncoming = function(data){
		$scope.incomingincidents = data;
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

		for (i=0; i<data.length;i++){

			if (data[i].date === $scope.date+"/01"){
				$scope.nrofincomingincidents['january'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['january']){
					$scope.topsenders['january'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['january'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/02"){
				$scope.nrofincomingincidents['febuary'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['febuary']){
					$scope.topsenders['febuary'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['febuary'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/03"){
				$scope.nrofincomingincidents['march'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['march']){
					$scope.topsenders['march'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['march'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/04"){
				$scope.nrofincomingincidents['april'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['april']){
					$scope.topsenders['april'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['april'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/05"){
				$scope.nrofincomingincidents['may'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['may']){
					$scope.topsenders['may'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['may'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/06"){
				$scope.nrofincomingincidents['june'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['june']){
					$scope.topsenders['june'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['june'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/07"){
				$scope.nrofincomingincidents['july'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['july']){
					$scope.topsenders['july'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['july'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/08"){
				$scope.nrofincomingincidents['august'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['august']){
					$scope.topsenders['august'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['august'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/09"){
				$scope.nrofincomingincidents['september'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['september']){
					$scope.topsenders['september'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['september'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/10"){
				$scope.nrofincomingincidents['oktober'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['oktober']){
					$scope.topsenders['oktober'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['oktober'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/11"){
				$scope.nrofincomingincidents['november'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['november']){
					$scope.topsenders['november'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['november'][data[i].assignedfrom] = 1;
				}
			}else if (data[i].date === $scope.date+"/12"){
				$scope.nrofincomingincidents['december'] += 1;
				if (data[i].assignedfrom in $scope.topsenders['december']){
					$scope.topsenders['december'][data[i].assignedfrom] += 1;
				}else{
					$scope.topsenders['december'][data[i].assignedfrom] = 1;
				}
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

		for(i=0;i<data.length;i++){
			if (data[i].date === $scope.date+"/01"){
				$scope.nrofoutgoingincidents['january'] += 1;
				if (data[i].assignedto in $scope.topreceivers['january']){
					$scope.topreceivers['january'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['january'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/02"){
				$scope.nrofoutgoingincidents['febuary'] += 1;
				if (data[i].assignedto in $scope.topreceivers['febuary']){
					$scope.topreceivers['febuary'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['febuary'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/03"){
				$scope.nrofoutgoingincidents['march'] += 1;
				if (data[i].assignedto in $scope.topreceivers['march']){
					$scope.topreceivers['march'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['march'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/04"){
				$scope.nrofoutgoingincidents['april'] += 1;
				if (data[i].assignedto in $scope.topreceivers['april']){
					$scope.topreceivers['april'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['april'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/05"){
				$scope.nrofoutgoingincidents['may'] += 1;
				if (data[i].assignedto in $scope.topreceivers['may']){
					$scope.topreceivers['may'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['may'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/06"){
				$scope.nrofoutgoingincidents['june'] += 1;
				if (data[i].assignedto in $scope.topreceivers['june']){
					$scope.topreceivers['june'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['june'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/07"){
				$scope.nrofoutgoingincidents['july'] += 1;
				if (data[i].assignedto in $scope.topreceivers['july']){
					$scope.topreceivers['july'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['july'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/08"){
				$scope.nrofoutgoingincidents['august'] += 1;
				if (data[i].assignedto in $scope.topreceivers['august']){
					$scope.topreceivers['august'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['august'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/09"){
				$scope.nrofoutgoingincidents['september'] += 1;
				if (data[i].assignedto in $scope.topreceivers['september']){
					$scope.topreceivers['september'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['september'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/10"){
				$scope.nrofoutgoingincidents['oktober'] += 1;
				if (data[i].assignedto in $scope.topreceivers['oktober']){
					$scope.topreceivers['oktober'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['oktober'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/11"){
				$scope.nrofoutgoingincidents['november'] += 1;
				if (data[i].assignedto in $scope.topreceivers['november']){
					$scope.topreceivers['november'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['november'][data[i].assignedto] = 1;
				}
			}else if (data[i].date === $scope.date+"/12"){
				$scope.nrofoutgoingincidents['december'] += 1;
				if (data[i].assignedto in $scope.topreceivers['december']){
					$scope.topreceivers['december'][data[i].assignedto] += 1;
				}else{
					$scope.topreceivers['december'][data[i].assignedto] = 1;
				}
			}
		}

		$scope.addSeries('Outgoing', $scope.nrofoutgoingincidents);
	};

	failureFunctionOutgoing = function(data){
		$scope.outgoingerror = data;
		console.log('Error: ' + data);
	};	

	$scope.swapChartType = function(){
		if($scope.highchartsNG.options.chart.type === 'column'){
			$scope.highchartsNG.options.chart.type = 'line'
		} else {
			$scope.highchartsNG.options.chart.type = 'column'
		}
	}

	$scope.setdate = function(data){
		$scope.date = data;
		$scope.removeSeries();
		INCOMINGINC.get(successFunctionIncoming, failureFunctionIncoming, $scope.date);
		OUTGOINGINC.get(successFunctionOutgoing, failureFunctionOutgoing, $scope.date);
	}

	$scope.sorttop = function(data){
		var sortable = [];
		for(var value in data){
			sortable.push([value, data[value]]);
		}

		sortable.sort(function(a,b){return b[1] - a[1]})
		var returndata = {};
		
		if (sortable.length > 0){
			for (var i = 0; i <= topnumber; i++) {
				returndata[sortable[i][0]] = sortable[i][1]
			}
			return returndata;
		}else{
			return data;
		}

		
	}

	$scope.setdate($scope.date);
});