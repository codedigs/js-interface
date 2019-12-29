function EventsInterface() {}
EventsInterface.prototype = {
	before: function() {},
	during: function() {},
	after: function() {}
};

Function.prototype.implements = function() {
	var bluePrint = this; // class
	var methods = Object.keys(bluePrint.prototype);

	var interfaces = arguments;

	for (var i in interfaces) {
		var requiredMethods = Object.keys(interfaces[i].prototype);

		for (var j in methods) {
			var index = requiredMethods.indexOf(methods[j]); // index of required methods

			if (index !== -1) { // check if method exist
				var numOfParam = this.prototype[methods[j]].length;
				var numOfRequiredParam = interfaces[i].prototype[methods[j]].length;

				if (numOfParam === numOfRequiredParam) { // check if number of parameters are same
					requiredMethods.splice(index, 1); // reduce required method
				}
			}
		}

		if (requiredMethods.length > 0) {
			console.error("Error: " + bluePrint.name + " prototypes not meet the " + interfaces[i].name + " requirements.");
		}
	}

	return this;
};