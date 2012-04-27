/**
 * @class VideoPlayerViewController The controller for the Video Player View.
 *
 * @author Gerardo Rodriguez - gerardo.rodriguez@dachisgroup.com
 * @created 04/26/2012
 */
function VideoPlayerViewController() {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------
	this.videoPlayerDataArr;
	//-------------------------------------------------
	// Faux Constructor Init
	//-------------------------------------------------
	this.init(); // We need to call our faux constructor, since it won't actually run by itself.
}

VideoPlayerViewController.prototype = {
	/**
	 * @private init() Our constructor method.
	 */
	init: function() {
		// do something here

		// Setup our event binding.
		this.bindEvents();
	},
	//-------------------------------------------------
	// Public Methods
	//-------------------------------------------------
	
	//-------------------------------------------------
	// Private Methods
	//-------------------------------------------------
	/**
	 * @private bindEvents() Will handle all of our event binding.
	 */
	bindEvents: function() {
		// bind events
	}
	//-------------------------------------------------
	// Getters/Setters
	//-------------------------------------------------
};
