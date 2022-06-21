

$(document).ready(function () {




  //HANDLING FORM SUBMIT AND AVOIDING PAGE RELOADING
  $('#education').hide();
  $('#skills').hide();
  $('#projects').hide();
  $('#love').hide();
  $('#aboutMe').hide();


  $('.unlock').click(function () {

    showEducation();

  });
  $('#goBack1').click(function () {

    goHome()

  });


  $('#next1').click(function () {

    gotoEducation()
  });
  $('#next2').click(function () {

    gotoSkills()
  });
  $('#goBack2').click(function () {

    goHome()

  });

});

function gotoHome() {
  $('#love').fadeOut();
  $('#aboutMe').fadeOut();

  setTimeout(() => {
    $('#welcome').fadeIn();


  }, "1000");
  $('#education').hide();
  $('#skills').hide();
  $('#projects').hide();
  $('#gallery').hide();

}
function showEducation() {
  $('#welcome').fadeOut();
  setTimeout(() => {
    $('#aboutMe').fadeIn();


  }, "1000");
  $('#education').hide();
  $('#skills').hide();
  $('#projects').hide();
  $('#gallery').hide();
  $('#love').fadeOut();


}
function goHome() {
  $('#aboutMe').fadeOut();
  setTimeout(() => {
    $('#welcome').fadeIn();


  }, "1000");
  $('#education').hide();
  $('#skills').fadeOut();
  $('#projects').fadeOut();
  $('#gallery').fadeOut();
  $('#love').fadeOut();


}
function goToAboutMe() {
  $('#aboutMe').fadeOut();
  setTimeout(() => {
    $('#welcome').fadeIn();


  }, "1000");
  $('#education').hide();
  $('#skills').fadeOut();
  $('#projects').fadeOut();
  $('#gallery').fadeOut();
  $('#love').fadeOut();


}

function gotoEducation() {
  $('#aboutMe').fadeOut();
  $('#skills').fadeOut();
  $('#projects').fadeOut();
  $('#gallery').fadeOut();
  $('#love').fadeOut();

  setTimeout(() => {
    $('#education').fadeIn();



  }, "1000");
}
function gotoLove() {
  $('#aboutMe').fadeOut();
  $('#skills').fadeOut();
  $('#education').fadeOut();
  $('#projects').fadeOut();


  $('#gallery').fadeOut();
  setTimeout(() => {
    $('#love').fadeIn();
  }, "1000");
}
function gotoSkills() {
  $('#aboutMe').fadeOut();
  $('#education').hide();
  $('#projects').fadeOut();
  $('#gallery').fadeOut();
  $('#love').fadeOut();

  setTimeout(() => {
    $('#skills').fadeIn();


  }, "1000");




}
function gotoGallery() {
  $('#aboutMe').fadeOut();
  $('#education').hide();
  $('#projects').fadeOut();
  $('#skills').fadeOut();
  $('#love').fadeOut();

  setTimeout(() => {
    $('#gallery').fadeIn();
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




$(document).ready(function () {
  $('.title').click(function () {
    $('.container').addClass('open');
  });


  $('.close').click(function () {
    $('.container').removeClass('open');
  });
});

//Animating love
var element = document.getElementById('animLove');
var target = document.getElementsByClassName('loveBig')[0];
var button = document.getElementById('animLove');
var xT = target.offsetLeft;
var yT = target.offsetTop;
button.addEventListener('click', function () {
  // for (var i = 0; i < 100; i++) {
  // // store the elements coordinate
  // var xE = element.offsetLeft;
  // var yE = element.offsetTop;
  // alert(yE)
  // // set elements position to their position for smooth animation
  // element.style.left = xE + 'px';
  // element.style.top = yE + 'px';
  // // set their position to the target position
  // // the animation is a simple css transition
  // element.style.display = "absolute";
  // element.style.left = xT + 'px !important';

  // element.style.top = yT + 'px !important';
  // }
  jQuery("#loved").clone().appendTo('.loveBig')
});