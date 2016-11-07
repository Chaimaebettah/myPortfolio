'use strict';
(function(){
  function Project(pro){
    this.title = pro.title;
    this.description = pro.description;
    this.rating = pro.rating;
    this.projectLink = pro.projectLink;
    this.imagePath = pro.imagePath;
    this.category = pro.category;
  }

  Project.prototype.toHtml = function(){
    var source = $('#projects-templating').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };



  var getProjectData = $.ajax({ dataType: 'json', url: '/js/data.json' });
  getProjectData.then(function(response){
    response.data
    .map(function(project){
      return new Project(project);
    })
    .reduce(function(prev, curr){
      $('.projects-container').append(curr.toHtml());
      return prev;
    },[]);


    filterElements($('.buttons-container'), $('.project-template'), 'all');
    filterElements($('.navigation ul'), $('section'), 'home');
  })
  .catch(function(response){
    console.log('there was an error', response);
  });

})();
