var SpecificPage = (function() {
	function UserEvents() {

	}

	UserEvents.prototype = {
		onDelete: function() {

		},

		onAdd: function() {

		},

		during: function(a, b) {
			return null; // do nothing
		},

		after: function(a, b, c) {
			return null; // do nothing
		}
	};

	UserEvents.implements(EventsInterface);

	var userEvents = new UserEvents();

	$('#users').on("click", ".delete-user", userEvents.onDelete);

	return {
		UserEvents: UserEvents
	};

	// var UserEvents = {
	// 	onDelete: function() {
	// 		// before
	// 		// during
	// 		// after

	// 		console.log("delete");
	// 	}
	// };
})();

$(document).ready(SpecificPage);