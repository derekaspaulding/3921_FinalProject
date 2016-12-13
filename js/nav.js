var homeNavButton = document.querySelector('#homeNavButton');
var dosNavButton = document.querySelector('#dosNavButton');
var webAppNavButton = document.querySelector('#webAppNavButton');
var socialEngNavButton = document.querySelector('#socialEngNavButton');
var activeButton = homeNavButton;


var webAppWaypoint = new Waypoint({
		element: document.querySelector('#webAppTopic h1'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = webAppNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 50
})

var webAppWaypoint2 = new Waypoint({
		element: document.querySelector('#webAppTopic p'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = webAppNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 30
})

var webAppWaypoint2 = new Waypoint({
		element: document.querySelector('#webAppTopic p:last-of-type'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = webAppNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 30
})



var dosWaypoint = new Waypoint({
		element: document.querySelector('#dosTopic h1'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = dosNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 50
})

var dosWaypoint2 = new Waypoint({
		element: document.querySelector('#dosTopic p'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = dosNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 30
})

var dosWaypoint3 = new Waypoint({
		element: document.querySelector('#dosTopic p:last-of-type'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = dosNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 30
})



var socialEngWaypoint = new Waypoint({
		element: document.querySelector('#socialEngTopic h1'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = socialEngNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 50
})

var socialEngWaypoint2 = new Waypoint({
		element: document.querySelector('#socialEngTopic p'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = socialEngNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 30
})

var socialEngWaypoint3 = new Waypoint({
		element: document.querySelector('#socialEngTopic p:last-of-type'),
		handler: function() {
			activeButton.classList.remove('active'); //remove active
			activeButton = socialEngNavButton; //change active button
			activeButton.classList.add('active'); //add active
		},
		offset: 30
})
