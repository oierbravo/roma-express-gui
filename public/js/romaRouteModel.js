var RomaRouteModel = Backbone.Model.extend({

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