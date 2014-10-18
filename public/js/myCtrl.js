var app = angular.module('FullStax');

app.controller('MainController', function($scope, mainService){
	$scope.getFriends = function() {
		mainService.getFriends().then(function(data) {
			$scope.friends = data.data;
			console.log($scope.friends);
		})
	}


	$scope.addFriend = function() {
		mainService.addFriend($scope.friend);

		mainService.getFriends().then(function(response){
			$scope.freinds = response.data;
			console.log($scope.freinds);
		})

		$scope.friend = {
			name: '',
			age: '',
			yearMet: ''
		}
	}

	$scope.getFamily = function() {
		mainService.getFamily().then(function(data) {
			$scope.family = data.data;
			console.log($scope.family);
		})
	}

	$scope.getActivities = function() {
		mainService.getActivities().then(function(data) {
			$scope.activities = data.data;
			console.log($scope.activities);
		})
	}

	$scope.getPersonal = function() {
		mainService.getPersonal().then(function(data) {
			$scope.info = data.data;
			console.log($scope.info);
		})
	}
});