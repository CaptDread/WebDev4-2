"use strict";

var showcaseImg = document.querySelector('.showcaseImg');
var img1 = "dist/img/plumb1.jpg";
var img2 = "dist/img/plumb2.jpg";
var img3 = "dist/img/plumb3.jpg"; // var waypoint = new Waypoint({
//     element: document.getElementsByClassName('plumbus_hero-cta1'),
//     handler: function(direction) {
//         console.log('Scrolled to waypoint!')
//     }
// })

var galleryShow = function galleryShow() {
  console.log("Gallery Starting");
  setInterval(function () {
    console.log("Gallery Started");
    setTimeout(function () {
      showcaseImg.src = img2;
      console.log("img2");
    }, 1500);
    setTimeout(function () {
      showcaseImg.src = img3;
      console.log("img3");
    }, 1500);
    setTimeout(function () {
      showcaseImg.src = img1;
      console.log("img1");
    }, 1500);
  }, 45000);
};

galleryShow();
//# sourceMappingURL=main.js.map
