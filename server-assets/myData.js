var family = [
	{
		name: 'Greg',
		age: 60,
		relationship: 'dad'
	},

	{
		name: 'Shelly',
		age: 50,
		relationship: 'mom'
	},

	{
		name: 'Chelsey',
		age: 28,
		relationship: 'wife'
	},

	{
		name: 'Henry',
		age: 1,
		relationship: 'son'
	},

	{
		name: 'Clark',
		age: 26,
		relationship: 'brother'
	},

];

module.exports.getFamily = function() {
	return family;
};

module.exports.addFamilyMember = function(newFamilyMember) {
	family.push(newFamilyMember);
};

var friends = [
	{
		name: 'Clayton',
		age: 30,
		yearMet: 2002 
	},

	{
		name: 'Spencer',
		age: 22,
		yearMet: 2014
	},

	{
		name: 'Rowan',
		age: 24,
		yearMet: 2013 
	},

	{
		name: 'Ryan',
		age: 33,
		yearMet: 2011 
	},

];

module.exports.getFriends = function() {
	return friends;
};

module.exports.addFriend = function(newFriend) {
	friends.push(newFriend);
};

var activities = [
{
	name: 'flyfishing'
},

{
	name: 'golf'
}
];

module.exports.getActivities = function() {
	return activities;
};

module.exports.addActivity = function(newActivity) {
	activities.push(newActivity);
};

var personalData = [
	{
		name: 'Chase',
		age: 30,
		height: 5
	}
];

module.exports.getPersonal = function() {
	return personalData;
};


