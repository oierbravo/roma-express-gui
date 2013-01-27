var RomaDeviceView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

	template: _.template(
	'<div class="device-item"> \
      <div class="device-id"> <%- id %> </div> \
        <ul class="device-info"> \
          <li>fromPort:<span class="device-info-fromport"> <%- fromPort %> </span> </li>\
          <li>toPort<span class="device-info-toport"> <%- toPort %> </span> </li> \
		  <li>Host<span class="device-info-host"> <%- host %> </span> </li> \
		  <li>toHost<span class="device-info-tohost"> <%- toHost %> </span> </li> \
        </ul> \
      </div>'
	  ),
	
	//template: _.template(""),
    // The DOM events specific to an item.
   events: {
  //    "click .device-id"   : "toggleInfo",
 //     "dblclick .view"  : "edit",
//      "click a.destroy" : "clear"
   //   "keypress .edit"  : "updateOnEnter",
    //  "blur .edit"      : "close"
    },


    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the todo item.
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
	  //this.$el.html(this.model.id);
      return this;
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    },


  });