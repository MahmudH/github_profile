githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;
  self.img = 

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response){
        self.searchResult = response.data;
      })
  }
}]);
