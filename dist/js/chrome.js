"use strict";

var videosData = [{
  name: 'plumbusX',
  video: '/img/PlumbusX.mp4',
  thumb: '/../dist/img/plumbusx.jpg'
}];
var videoElement = document.querySelector('video'); // ideally, this would be more specific. What if there was more than one video tag on the page?

var ppButton = document.querySelector('.play-pause');
var quietOrNotBtn = document.querySelector('.mute-unmute');
var bigorSmallBtn = document.querySelector('.full-screen');
var backFifteen = document.querySelector('.back-15');
var fwdFifteen = document.querySelector('.forward-15');
var barOfProgresion = document.querySelector('.progress-bar');
var timePlayed = document.querySelector('.time');
var listOfVids = document.querySelector('.playlist');
videoElement.loop = true;

var pauseOrPlay = function pauseOrPlay() {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

ppButton.addEventListener('click', pauseOrPlay);
ppButton.classList.add('button');
videoElement.addEventListener('click', pauseOrPlay);
window.addEventListener('keyup', function () {
  if (event.code === "Space") {
    pauseOrPlay();
  }
});
quietOrNotBtn.addEventListener('click', function () {
  if (videoElement.muted) {
    videoElement.muted = false;
  } else {
    videoElement.muted = true;
  }
});
bigorSmallBtn.addEventListener('click', function () {
  videoElement.requestFullscreen();
});

var minusFifteen = function minusFifteen() {
  videoElement.currentTime -= 15;
};

backFifteen.addEventListener('click', minusFifteen);
window.addEventListener('keyup', function () {
  if (event.code === "ArrowLeft") {
    minusFifteen();
  }
});

var plusFifteen = function plusFifteen() {
  videoElement.currentTime += 15;
};

fwdFifteen.addEventListener('click', plusFifteen);
window.addEventListener('keyup', function () {
  if (event.code === "ArrowRight") {
    plusFifteen();
  }
});
barOfProgresion.style.width = '100%';
setInterval(function () {
  barOfProgresion.style.width = videoElement.currentTime / videoElement.duration * 100 + '%';
  timePlayed.innerHTML = Math.floor(videoElement.currentTime) + ' of ' + Math.floor(videoElement.duration);
}, 100);

var _loop = function _loop() {
  var vidURL = videosData[i].video;
  var vidThumb = document.createElement('img');
  listOfVids.appendChild(vidThumb);
  vidThumb.setAttribute('src', videosData[i].thumb);
  vidThumb.setAttribute('title', videosData[i].name);
  vidThumb.addEventListener('click', function () {
    console.log(i);
    videoElement.setAttribute('src', vidURL);
  });
};

for (var i = 0; i < videosData.length; i++) {
  _loop();
} // videosData.forEach(function(vidData) {
// 	let vidThumb = document.createElement('img')
// 	listOfVids.appendChild(vidThumb)
// 	vidThumb.setAttribute('src', vidData.thumb)
// 	vidThumb.setAttribute('title', vidData.name)
// 	vidThumb.addEventListener('click', function(){
// 		console.log(vidData)
// 		videoElement.setAttribute('src', vidData.video)
// 	})
// })
//# sourceMappingURL=chrome.js.map
