'use strict';
//show and hide the nav in the mobile screen
(function(){
  var projects = [];
  var rating = [];

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
    response.data.forEach(function(project){
      projects.push(new Project(project));
    });
    function ratingProjects(){
      // console.log(response.data);
      return response.data.
          filter(function(proj) {
            console.log(proj.rating);
            return proj.rating === 5.0;
          }).
          map(function(proj) {
            console.log(proj.title);
            // console.log('heyy');
            return proj.title;
          });
    }

    ratingProjects();

    projects.forEach(function(project){
      $('.projects-container').append(project.toHtml());
    });

    filterElements($('.buttons-container'), $('.project-template'), 'all');
    filterElements($('.navigation ul'), $('section'), 'home');
  })
  .catch(function(response){
    console.log('there was an error', response);
  });

})();
