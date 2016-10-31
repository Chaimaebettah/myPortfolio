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
    var $newProject = $('.project-template.template').clone();
    $newProject.find('h5').html(this.title);
    $newProject.find('p').html(this.description);
    $newProject.find('li a').attr('href', this.projectLink);
    $newProject.find('img').attr('src', this.imagePath);
    $newProject.attr('data-category',this.category);

    $newProject.removeClass('template');

    return $newProject;
  };

  data.forEach(function(e){
    projects.push(new Project(e));
  });


  projects.forEach(function(project){
    $('.projects-container').append(project.toHtml());
  });
})();
