$(function() {
  var options = {
    fade: 1
  };
  
  var slides = [
    { src:  'images/food/aloo_gobi.png', from: '50% 40% 1x', to: '100% 100% 1x', time: 5 },
    { src:  'images/food/spices.jpg', from: '100% 100% 1x', to: '20% 20% 1x', time: 5 },
    { src:  'images/food/naan.jpg', from: '100% 100% 1x', to: '100% 100% 1x', time: 5 },
    { src:  'images/food/kale_curry.jpg', from: '50% 40% 1x', to: '100% 100% 1x', time: 5 }
  ];

  $("#slideshow").crossSlide(options, slides);
});