(function(module){

  var projectController = {};

  projectController.reveal = function(){
    $('section').hide();
    $('.projects-section').fadeIn();
  };

  module.projectController = projectController;
})(window);
