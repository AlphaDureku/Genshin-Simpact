let bubble = document.getElementById("bubble");
let icon = document.getElementById("hutao");
let song = document.getElementById("music");
let j = 1;




const plays=()=>{
   if(song.paused){
    song.setAttribute("src", `./assets/music_${j}.mp3`);
    song.play();
        if(j<3){
             j++
        }else{
             j=1;
        }
    bubble.setAttribute("src", "./assets/bubble_2.png");
    console.log(j);
   }
   else{
    song.pause();
    bubble.setAttribute("src", "./assets/bubble.png");
   }
   
}



//sidebar slide
let side_btn = document.getElementById("top-menu-btn");
let side_nav = document.getElementById("side")
let profile_nav = document.getElementById("profile")

function slide(){
    side_nav.classList.toggle('active');
    side_btn.classList.toggle('active');
}

function profile_slide(){
    profile_nav.classList.toggle('active');
    
    
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
    

}
