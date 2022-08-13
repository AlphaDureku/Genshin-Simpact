let bubble = document.getElementById("bubble");
let icon = document.getElementById("hutao");
let song = document.getElementById("music");


const plays=()=>{
   if(song.paused){
    song.play();
    bubble.setAttribute("src", "./assets/bubble_2.png");
   }
   else{
    song.pause();
    bubble.setAttribute("src", "./assets/bubble.png");
   }
   
}


//sidebar slide
let btn = document.getElementById("top-menu-btn");
let side_nav = document.getElementById("side")

function slide(){
    side_nav.classList.toggle('active')
    btn.classList.toggle('active')
}



// Banner 
let banner = document.getElementById("image");
let i = 1;
let time = 5000;
window.onload = banner_slider();
function banner_slider(){
    banner.setAttribute("src", `./assets/banner_${i}.jpg`);
    if(i<6){
        i++;
        console.log(i);
    }
    else{
        i=1;
    }
    
    setTimeout(banner_slider, time);
}

const prev = () => {
    clearTimeout(time);
    i--;
    if(i<1){
        i=6;
    }
    banner.setAttribute("src", `./assets/banner_${i}.jpg`);
    console.log(i);

}

const next = () => {
    clearTimeout(time);
    i++;
    if(i>6){
        i=1;
    }
    banner.setAttribute("src", `./assets/banner_${i}.jpg`);
    console.log(i);

}
