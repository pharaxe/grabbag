include mootools-core

var requestCategories = new Request({
   url: 'https://www.ifixit.com/api/2.0/categories'
   onProgress: function(event, xhr){
      var loaded = event.loaded, total = event.total;

      console.log(parseInt(loaded / total * 100, 10));
   }
});

var devices = requestCategories.send();
console.log(devices);
