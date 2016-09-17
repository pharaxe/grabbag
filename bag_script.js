var requestCategories = new Request.JSON({
   url: 'https://www.ifixit.com/api/2.0/categories',
   onSuccess: function(responseJSON, responseText) {
      addDevicesRecursively($('devices'), responseJSON);
   }
});

requestCategories.get();

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
