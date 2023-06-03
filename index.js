let bubble = document.getElementById("bubble");
let icon = document.getElementById("hutao");
let song = document.getElementById("music");
let imageBanner = document.getElementById("image");
let isPausedSlider = false;
let j = 1;
song.loop = true;
const imageSrc = [
  "./assets/banner_1.jpg",
  "./assets/banner_2.jpg",
  "./assets/banner_3.jpg",
  "./assets/banner_4.jpg",
  "./assets/banner_5.jpg",
  "./assets/banner_6.jpg",
];
const plays = () => {
  if (song.paused) {
    song.setAttribute("src", `./assets/music_${j}.mp3`);
    song.play();
    if (j < 3) {
      j++;
    } else {
      j = 1;
    }
    bubble.setAttribute("src", "./assets/bubble_2.png");
    console.log(j);
  } else {
    song.pause();
    bubble.setAttribute("src", "./assets/bubble.png");
  }
};

//sidebar slide
let side_btn = document.getElementById("top-menu-btn");
let side_nav = document.getElementById("side");
let profile_nav = document.getElementById("profile");

function slide() {
  side_nav.classList.toggle("active");
  side_btn.classList.toggle("active");
}

function profile_slide() {
  profile_nav.classList.toggle("active");
}

// Banner
let banner = document.getElementById("image");
let i = 1;
let time = 5000;
let currentIndex = 0;
window.onload = banner_slider();
function banner_slider() {
  imageBanner.src = imageSrc[currentIndex];
  currentIndex++;
  console.log(isPausedSlider);
  if (!isPausedSlider) {
    setTimeout(() => {
      banner_slider();
    }, time);
  }
}

const prev = () => {
  isPausedSlider = true;
  if (currentIndex === 0) {
    currentIndex = imageSrc.length;
  }
  currentIndex--;
  console.log(currentIndex);
  imageBanner.src = imageSrc[currentIndex];
  isPausedSlider = false;
};

const next = () => {
  isPausedSlider = true;
  currentIndex++;
  if (currentIndex > 5) {
    currentIndex = 0;
  }
  imageBanner.src = imageSrc[currentIndex];

  isPausedSlider = false;
};
