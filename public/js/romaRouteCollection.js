var RomaRoutesCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: RomaRouteModel,

    url: function() {
      return 'http://localhost:3000/routes';
    }
  });
	 // Create our global collection of **Todos**.
  var RomaRoutes = new RomaRoutesCollection;