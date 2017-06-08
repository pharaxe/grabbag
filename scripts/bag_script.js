var requestCategories = new Request.JSONP({
   url: 'https://www.ifixit.com/api/2.0/categories',
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
