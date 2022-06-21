

$(document).ready(function () {




  //HANDLING FORM SUBMIT AND AVOIDING PAGE RELOADING
  $('#education').hide();
  $('#skills').hide();
  $('#projects').hide();
  // $('#gallery').hide();
  $('#aboutMe').hide();


  $('.unlock').click(function() {
   
    showEducation();
    
  });
  $('#goBack1').click(function() {
   
    goHome()
      
    });


    $('#next1').click(function() {
   
      gotoEducation()
      });
      $('#next2').click(function() {
   
        gotoSkills()
        });
        $('#goBack2').click(function() {
   
          goHome()
            
          });

});

  function showEducation(){
    $('#welcome').fadeOut();
    setTimeout(() => {
      $('#aboutMe').fadeIn();

  
    }, "1000");
    $('#education').hide();
    $('#skills').hide();
    $('#projects').hide();
    // $('#gallery').hide();
  
}
function goHome(){
  $('#aboutMe').fadeOut();
  setTimeout(() => {
    $('#welcome').fadeIn();


  }, "1000");
  $('#education').hide();
  $('#skills').fadeOut();
  $('#projects').fadeOut();
  // $('#gallery').fadeOut();

}

function gotoEducation(){
  $('#aboutMe').fadeOut();
  $('#skills').fadeOut();
  $('#projects').fadeOut();
  // $('#gallery').fadeOut();
  setTimeout(() => {
    $('#education').fadeIn();


  }, "1000");
 


}
function gotoSkills(){
  $('#aboutMe').fadeOut();
  $('#education').hide();
  $('#projects').fadeOut();
  // $('#gallery').fadeOut();
  setTimeout(() => {
    $('#skills').fadeIn();


  }, "1000");
 


}



 





















$(document).on('submit', '#questions', function () {
  checkAnswers();

  $('#aboutMe').fadeOut();

  $("#calculating").fadeIn();

  setTimeout(() => {
    $("#calculating").fadeOut();

    $('#final').fadeIn();

  }, "4000");

  console.log(marks);
  return false;
});

//==============================================================================================================================================




$(document).ready(function(){
  $('.title').click(function(){
    $('.container').addClass('open');
  });
  
  
  $('.close').click(function(){
    $('.container').removeClass('open');
  });
});

//Animating love
var elements = document.getElementsByClassName('element');
var target = document.getElementsByClassName('target')[0];
var button = document.getElementById('animLove');
var xT = target.offsetLeft;
var yT = target.offsetTop;
