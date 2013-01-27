
   var RomaRoutesView = Backbone.View.extend({
	el: $("#roma-routes-wrapper")
	,initialize: function() {


	  this.listenTo(RomaRoutes, 'add', this.addOne);
	  this.listenTo(RomaRoutes, 'reset', this.addAll);
	  this.listenTo(RomaRoutes, 'all', this.render);


	  this.main = $('#roma-routes');

	  RomaRoutes.fetch();
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
