function EventsInterface() {}
EventsInterface.prototype = {
	before: function(a) {
		return null; // do nothing
	},

	during: function(a, b) {
		return null; // do nothing
	},

	after: function(a, b, c) {
		return null; // do nothing
	}
};

Function.prototype.implements = function() {
	window.a = this;
	window.b = arguments;

	var bluePrint = this; // class
	var methods = Object.keys(bluePrint.prototype);

	var interfaces = arguments;

	for (var i in interfaces) {
		var requiredMethods = Object.keys(interfaces[i].prototype);

		for (var j in methods) {
			var index = requiredMethods.indexOf(methods[j]); // index of required methods

			if (index !== -1) {
				requiredMethods.splice(index, 1); // reduce required method
			}
		}

		if (requiredMethods.length > 0) {
			console.error("Error: " + bluePrint.name + " prototypes not meet the " + interfaces[i].name + " requirements.");
		}
	}

	return this;
};