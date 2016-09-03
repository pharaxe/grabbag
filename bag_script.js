var requestCategories = new Request({
   url: 'https://www.ifixit.com/api/2.0/categories',
   onSuccess: function(responseText) {
      console.log(responseText);
   }
});

var devices = requestCategories.put();
