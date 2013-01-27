//(function ($) {
$(document).ready(function() {  
  var RomaDevices = new RomaDeviceCollection;

   var devices = new RomaDevicesView;
   var routes = new RomaRoutesView;
  //console.log($('#device-template'));
  	var RomaRouter = Backbone.Router.extend({

	  routes: {

		"":"homeFunc"
		,"devices":"devicesFunc"
        ,"routes":"routesFunc",
	  }
     ,homeFunc: function() {
		console.log('home');
		devices.hide();
		routes.hide();
	  }
	  ,devicesFunc: function() {
		console.log('devices');
		devices.show();
		routes.hide();
	  }
	  
	  ,routesFunc: function() {
		console.log('routes');
		devices.hide();
		routes.show();
	  }
   });   
   
   var router = new RomaRouter;
   //Initiate a new history and controller class
   Backbone.history.start();
});
//})(jQuery);