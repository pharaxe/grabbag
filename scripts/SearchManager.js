var SearchManager = new Class({
   initialize: function(name) {
      /*
      $('search_form').set('send', {
         onSuccess: function(html) {},
         onFailure: function(xhr) {}
      }).addEvents({
         submit: function() {
            e.stop();
            this.end();
         }
      });

      $('search_form').addEvents({

      });
      */

      $('search_button').addEvents({
         click: function() {
            var query = $('search_text').value;
            var request = searchManager.searchSubmit(query);
            request.send();
         }
      });
   },

   searchSubmit: function(query) {
      var search = new Request.JSON({
         url: 'proxy.php/suggest/' + query + '?doctypes=device',
         method: 'get',
         onSuccess: function(data) {
            searchManager.searchResults(data.results);
         },
         onFailure: function(data) {console.log('failed');}
      });

      return search;
   },

   searchResults: function(results) {
      var div = $('devices');

      Array.each(results, function(result) {
         var button = new Element('button', {
            text: result.title,
            'data-title': result.title
         });
         button.addEvents({
            click: function() {
               var info = new Request.JSON({
                  url: 'proxy.php/wikis/CATEGORY/' + result.title,
                  method: 'get',
                  onSuccess: function(data) {
                     deviceManager.cacheDevice(data);
                  }
               });

               info.send();
            }
         });
         div.grab(button);
      });
   }
});

searchManager = new SearchManager();
