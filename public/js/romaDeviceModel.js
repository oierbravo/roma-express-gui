  var RomaDeviceModel = Backbone.Model.extend({
	schema: {
	  id: { type: 'Text' , validators: ['required']}
	  ,toPort: { type: 'Number'}
	  ,toPort: { type: 'Number'}
	  ,host: { type: 'Text' , validators: ['required']}
	}
    // Default attributes for the device item.
    ,defaults: function() {
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
