   var RomaDevicesView = Backbone.View.extend({
	el: $("#roma-devices-wrapper")
	,initialize: function() {


	  this.listenTo(RomaDevices, 'add', this.addOne);
	  this.listenTo(RomaDevices, 'reset', this.addAll);
	  this.listenTo(RomaDevices, 'all', this.render);


	  this.main = $('#roma-devices');

	  RomaDevices.fetch();
	  
	}
		,hide: function(){
		  $(this.el).hide();
		}
		,show: function(){
		  $(this.el).show();
		}
		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		,render: function() {

		  if (RomaDevices.length) {
			this.main.show();

		  } else {
			this.main.hide();

		  }
		}

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		,addOne: function(todo) {
		  var view = new RomaDeviceView({model: todo});
		  this.$("#device-list").append(view.render().el);
		}

		// Add all items in the **Todos** collection at once.
		,addAll: function() {
		  RomaDevices.each(this.addOne, this);
		}
	  });