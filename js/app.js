function UserEvents() {

}

UserEvents.prototype = {
	onAdd: function(a) {

	},

	before: function() {

	},

	during: function() {

	},

	after: function() {

	}
};

UserEvents.implements(EventsInterface);

var userEvents = new UserEvents();