(function ($) {

   // RomaDevice Model
  // ----------

  // Our basic **Todo** model has `title`, `order`, and `done` attributes.
  var RomaDevice = Backbone.Model.extend({

    // Default attributes for the device item.
    defaults: function() {
      return {
        id: "newDevice"
		,toPort: "7777"
		,fromPort : 8888
		,host: "localhost"
      };
    },

    // Ensure that each todo created has `id`.
    initialize: function() {
      if (!this.get("id")) {
        this.set({"id": this.defaults().id});
      }
    },

  });
     // RomaDevices Collection
  // ---------------

  // The collection of todos is backed by *localStorage* instead of a remote
  // server.
  var RomaDeviceList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: RomaDevice,

    url: function() {
      return 'http://localhost:3000/devices';
    }
  });
	 // Create our global collection of **Todos**.
  var RomaDevices = new RomaDeviceList;

  // RomaDevice Item View
  // --------------

  // The DOM element for a todo item...
  var RomaDeviceView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
   // template: _.template($('#item-template').html()),

    // The DOM events specific to an item.
   /* events: {
      "click .toggle"   : "toggleDone",
      "dblclick .view"  : "edit",
      "click a.destroy" : "clear",
      "keypress .edit"  : "updateOnEnter",
      "blur .edit"      : "close"
    },
*/
    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the todo item.
    render: function() {
      //this.$el.html(this.template(this.model.toJSON()));
	  this.$el.html(this.model.id);
      return this;
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    }

  });

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
   var devices = new RomaDevicesView;
 //  devices.hide();
   
   
  // Our basic **Todo** model has `title`, `order`, and `done` attributes.
  var RomaRoute = Backbone.Model.extend({

    // Default attributes for the device item.
    defaults: function() {
      return {
        source: "/new/path"
		,targets:[]
      };
    },

    // Ensure that each todo created has `source` and empty `targets`.
    initialize: function() {
      if (!this.get("source")) {
        this.set({"source": this.defaults().source});
      }
	  if (!this.get("targets")) {
        this.set({"targets": this.defaults().targets});
      }
    },

  });   
   // RomaRoutes Collection
  // ---------------

  // The collection of todos is backed by *localStorage* instead of a remote
  // server.
  var RomaRoutesList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: RomaRoute,

    url: function() {
      return 'http://localhost:3000/routes';
    }
  });
	 // Create our global collection of **Todos**.
  var RomaRoutes = new RomaRoutesList;
  // RomaDevice Item View
  // --------------

  // The DOM element for a todo item...
  var RomaRouteView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
   // template: _.template($('#item-template').html()),

    // The DOM events specific to an item.
   /* events: {
      "click .toggle"   : "toggleDone",
      "dblclick .view"  : "edit",
      "click a.destroy" : "clear",
      "keypress .edit"  : "updateOnEnter",
      "blur .edit"      : "close"
    },
*/

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the todo item.
    render: function() {
      //this.$el.html(this.template(this.model.toJSON()));
	  
	  this.$el.html(this.model.attributes.source);
      return this;
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    }

  });
   var RomaRoutesView = Backbone.View.extend({
	el: $("#roma-routes-wrapper")
	,initialize: function() {


	  this.listenTo(RomaRoutes, 'add', this.addOne);
	  this.listenTo(RomaRoutes, 'reset', this.addAll);
	  this.listenTo(RomaRoutes, 'all', this.render);


	  this.main = $('#roma-routes');

	  RomaRoutes.fetch();
	  console.log(RomaRoutes);
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

		  if (RomaRoutes.length) {
			this.main.show();

		  } else {
			this.main.hide();

		  }
		}

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		,addOne: function(todo) {
		  var view = new RomaRouteView({model: todo});
		  this.$("#routes-list").append(view.render().el);
		}

		// Add all items in the **Todos** collection at once.
		,addAll: function() {
		  RomaRoutes.each(this.addOne, this);
		}
	  });
	  var routes = new RomaRoutesView;
    // routes.hide();
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

})(jQuery);