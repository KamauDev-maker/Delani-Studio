$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1400').hide('1000');
      $("#development").show('1400');
    });
    $("#development").click(function(){
      $("#development").slideUp('1400');
      $("#development-image").Down('1400');
    });
  });

  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1400').hide('1000');
      $("#design").show('1400');
    });
    $("#design").click(function(){
      $("#design").slideUp('1400');
      $("#design-image").slideDown('1400');
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1400').hide('1000');
      $("#product").show('1400');
    });
    $("#product").click(function(){
      $("#product").slideUp('1400');
      $("#product-image").slideDown('1400');
    });
  });
  