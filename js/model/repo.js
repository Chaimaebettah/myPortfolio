'use strict';

(function(module) {
  var repos = {};

  repos.allRepos = [];
  repos.requestRepos = function(callback) {
    $.ajax({
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken,},
      url: 'https://api.github.com/users/chaimaebettah/repos',
      success: function(data) {
        console.log(data);
        repos.allRepos = data;
        callback();
      }
    });


  };

  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
