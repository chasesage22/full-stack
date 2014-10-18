var app = angular.module('FullStax');

app.service('mainService', function($http, $q) {

	this.getFriends = function() {
		return $http({
			method: "GET",
			url: "http://localhost:3000/friends"
		});
	};

	this.addFriend = function(friendObject) {
		return $http({
			method: "POST",
			url: "http://localhost:3000/friends/new",
			data: {
				name: friendObject.name,
				age: friendObject.age,
				yearMet: friendObject.yearMet
			}
		})
	}

	this.getFamily = function() {
		return $http({
			method: "GET",
			url: "http://localhost:3000/family"
		});
	};

	this.getActivities = function() {
		return $http({
			method: "GET",
			url: "http://localhost:3000/activities"
		});
	}

	this.getPersonal = function() {
		return $http({
			method: "GET",
			url: "http://localhost:3000/me"
		});
	}

});