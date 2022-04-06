import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

$(document).ready(function(){
  $('.instructor__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
});

