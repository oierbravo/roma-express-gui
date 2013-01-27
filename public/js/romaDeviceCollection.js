var RomaDeviceCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: RomaDeviceModel,

    url: function() {
      return 'http://localhost:3000/devices';
    }
  });
var RomaDevices = new RomaDeviceCollection;