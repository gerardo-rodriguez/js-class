function AppController(age) {
	var _self = this;
	
	// Private class properties
	var _privateProperty = 'privateProperty';
	var _age = age;
	
	// private method, constructor
	_init = function() {
		// console.log("self.privateProperty: " + self.privateProperty);
		console.log("_privateProperty: " + _privateProperty);
		console.log("_age: " + _age);
		// console.log("self.age: " + self.age);
	}
	
	// Public method
	this.publicMethod = function() {
		console.log('publicMethod');
		_privateMethod('called from publicMethod');
	}
	
	// Private method
	_privateMethod = function(thought) {
		console.log('_privateMethod: ' + thought);
	}
	
	// Getters
	this.getPrivateProperty = function() {
		return _privateProperty;
	}
	
	this.getAge = function() {
		return _age;
	}
	
	// Setters
	this.setAge = function(newAge) {
		_age = newAge;
	}
	
	// call our constructor, private init method
	_init();
}


var controller = new AppController(7);
controller.publicMethod();
// controller._privateMethod('from instance');
// console.log( "controller.privateProperty: " + controller.privateProperty );
console.log( "controller.getPrivateProperty(): " + controller.getPrivateProperty() );
// console.log( "controller.age: " + controller.age );
console.log( "controller.getAge(): " + controller.getAge() );

controller.setAge(10);

console.log( "controller.getAge(): " + controller.getAge() );
