var DeviceManager = new Class({
   initialize: function(name) {
   },

   guideRequest: function() {

   },

   cacheDevice: function(data) {
      var device = new Device(data);
   },

   getDevice: function(title) {
      return deviceCache[title];
   }
});

var Device = new Class({
   initialize: function(data) {
      this.data = data;
      deviceCache[data.title] = this;
   }
});

deviceCache = [];
deviceManager = new DeviceManager();

document.addEvents({
   keydown: function(e) {
      console.log(e.key);
      if (e.key == 'c') {
         console.log(deviceCache);
      }
   }
});
