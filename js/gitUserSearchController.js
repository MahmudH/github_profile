githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users');
  var self = this;

  self.doSearch = searchResource.get(
    {q: self.searchTerm},
    access_token: ACCESS_TOKEN
  );
});
