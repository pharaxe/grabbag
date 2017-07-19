var requestCategories = new Request.JSONP({
   url: 'https://www.ifixit.com/api/2.0/categories',
   method: 'get',
   onComplete: function(data) {
      console.log(data);
      //addDevicesRecursively($('devices'), data);
   }
});

requestCategories.send();

function addDevicesRecursively(parentElement, hierarchy) {
   if (typeof hierarchy === 'string') {
      parentElement.grab(new Element('li', {
         html: hierarchy
         }));
   } else if (typeof hierarchy === 'object' && hierarchy) {
      var deviceList = new Element('ul');
      Object.each(hierarchy, function(value, key) {
         category = new Element('li', {
            html: key});
         deviceList.grab(category);
         addDevicesRecursively(category, value);
         });
      parentElement.grab(deviceList);
   }
}

var cache = [];

var getPage = function(name) {
   if (cache[name] != undefined) {
      return cache[name];
   } else {

   }
}

var Device = new Class({
   initialize: function(name) {
      this.wiki = null;
      this.guides = [];
      this.teardown = null;
   }
});

var Page = new Class({
   initialize: function(name) {
      this.name = name;
      this.image = null;
      this.url = null;
   },

   getImageUrl: function (size = 'thumbnail') {
       
   }


});



