'use strict';
//show and hide the nav in the mobile screen
$(document).ready(function(){
  $('.nav-icon').on('click',function(){
    $('.navigation ul').toggle('slow');
  });
});

(function(){
  var projects = [];

  function Project(pro){
    this.title = pro.title;
    this.description = pro.description;
    this.projectLink = pro.projectLink;
    this.imagePath = pro.imagePath;
    this.category = pro.category;
  }

  Project.prototype.toHtml = function(){
    var source = $('#projects-templating').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  data.forEach(function(e){
    projects.push(new Project(e));
  });


  projects.forEach(function(project){
    $('.projects-container').append(project.toHtml());
  });
})();
