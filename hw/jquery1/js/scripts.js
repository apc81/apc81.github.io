//Executes when page loads and its ready to view

var step = 0;

var titles =[
  'Add Liquid', // this is 0 titles[0]
  'Add Fruit or Vegetables', // this is 1 titles[1]
  'Thicken Smoothie', // this is 2 titles[2]
  'Boost Flavor', // this is 3 titles[3]
  'Add Super Foods'];// this is 4 titles[4]

$(function(){
  $("#stepinfo,section,footer, .prev").hide();

$('body').css('background-color','beige');
$('body').css('font-size','25px');


  });

$('.start').on('click',function(){
 //do stuff when the button is clicked
 $('.intro').hide();
 //$('.start').hide();
 $('footer, #stepinfo').show();
 step= 1;
 $('#step'+step).show();
 //f(x) = x+2
 // Set the title for our current step
 $('#stepinfo').text('Step '+step+': Add Liquid');
});
$('.next').on('click',function(){
$('#step'+step).hide();
  step++;
  if(step == 2) {
    $('.prev').show();
  }
  if(step == 5) {
    $('.next').hide();
    $('#end').html('End of Tutorial <strong> Learn Again?</strong>' );
  }

if(step <= 5) {
  $('#step'+step).show();
  $('#stepinfo').text('Step '+step+': '+titles[step-1]);}
  else {
    step--;
    $('#step'+step).show();
    $('.next').hide();
  }
});


//Previous


//Executes when page loads and its ready to view

$('.prev').on('click',function(){

$('#step'+step).hide();
  step--;
  if(step == 1) {
    $('.prev').hide();
  } else {
    $('next').show();
  }

if(step >= 1) {
  $('#step'+step).show();
  $('#stepinfo').text('Step '+step+': '+titles[step-1]);}
  else {
    step--;
    $('#step'+step).show();
    $('.next').hide();
  }
});
