$(function() {
  var options = {
    fade: 1,
    sleep: 7
  };

  var slides = [
    {
      src:  'images/food/spices.jpg',
    }, {
      src:  'images/food/chana_masala.jpg',
    }, {
      src:  'images/food/paneer.jpg',
    }, {
      src:  'images/food/bhindi.jpg',
    },{
      src:  'images/food/samosas.jpg',
    }
  ];

  $("#slideshow").crossSlide(options, slides);
});