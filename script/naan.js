$(function() {
  var options = {
    fade: 1,
    variant: true
  };
  
  var slides = [
    { src:  'images/food/aloo_gobi.png', from: '20% 20% 1x', to: '80% 100% 1x', time: 8 },
    { src:  'images/food/spices.jpg', from: '100% 100% 1x', to: '0% 0% 1x', time: 8 },
    { src:  'images/food/naan.jpg', from: '0% 0% 1x', to: '0% 0% 1x', time: 8 },
    { src:  'images/food/kale_curry.jpg', from: '15% 15% 1x', to: '100% 70% 1x', time: 8 }
  ];

  $("#slideshow").crossSlide(options, slides);
});
