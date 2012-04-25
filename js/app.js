/**
 * @class ClassExample A basic class example.
 *
 * @author Gerardo Rodriguez - ger.rod34@gmail.com
 * @created 04/24/2012
 */
function ClassExample(age) {
	
	var _self = this; // A reference to use within the class methods
	//-------------------------------------------------
	// Private Properties
	//-------------------------------------------------
	var _privateProperty = 'privateProperty';
	var _age = age;
	//-------------------------------------------------
	// Faux Constructor
	//-------------------------------------------------
	/**
	 * @private _init() Our class constructor.
	 */
	_init = function() {
		console.log("_privateProperty: " + _privateProperty);
		console.log("_age: " + _age);
	}
	//-------------------------------------------------
	// Public Methods
	//-------------------------------------------------
	/**
	 * @public Pulic method.
	 */
	this.publicMethod = function() {
		console.log('publicMethod');
		_privateMethod('called from publicMethod');
	}
	//-------------------------------------------------
	// Private Methods
	//-------------------------------------------------
	/**
	 * @private Private method.
	 */
	_privateMethod = function(thought) {
		console.log('_privateMethod: ' + thought);
	}
	//-------------------------------------------------
	// Event Handlers
	//-------------------------------------------------
	
	//-------------------------------------------------
	// Getters/Setters
	//-------------------------------------------------
	this.getPrivateProperty = function() {
		return _privateProperty;
	}
	
	this.getAge = function() {
		return _age;
	}

	this.setAge = function(newAge) {
		_age = newAge;
	}
	//-------------------------------------------------
	// Faux Constructor Init
	//-------------------------------------------------
	/**
	 * We need to call our faux constructor, since it won't actually run by itself.
	 */
	_init();
}

// Let's instanciate our class.
var controller = new ClassExample(7);
controller.publicMethod();
// controller._privateMethod('from instance');
// console.log( "controller.privateProperty: " + controller.privateProperty );
console.log( "controller.getPrivateProperty(): " + controller.getPrivateProperty() );
// console.log( "controller.age: " + controller.age );
console.log( "controller.getAge(): " + controller.getAge() );

controller.setAge(10);

console.log( "controller.getAge(): " + controller.getAge() );
