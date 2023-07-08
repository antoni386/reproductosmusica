let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});

function takeSnapShot()
{
   var canvasContext = frame.getContext("2d");
   canvasContext.drawImage(videoPlayer,0,0,480,400);
}

function acelerarVideo(vel)
{
   let video = document.getElementById('videoPlayer');
   let bv1 = document.getElementById('bVel1');
   let bv2 = document.getElementById('bVel2');
   
   if(vel == 1) {
      video.playbackRate = 1;
      bv1.classList.add('active');
      bv2.classList.remove('active');
   } else if(vel == 2) {
      video.playbackRate = 5; 
      bv1.classList.remove('active');
      bv2.classList.add('active');
   }  
}

function cambiarDim(iDim)
{ 
    var video = document.getElementById("videoPlayer");
    let bd1 = document.getElementById('bDim1');
    let bd2 = document.getElementById('bDim2');
    let bd3 = document.getElementById('bDim3');

    if (iDim == 1) {
      video.width = 250;
      bd1.classList.add('active');
      bd2.classList.remove('active');
      bd3.classList.remove('active');
    } else if (iDim == 2) {
      video.width = 700;
      bd1.classList.remove('active');
      bd2.classList.add('active');
      bd3.classList.remove('active');
    } else if (iDim == 3) {
      video.width = 1000;
      bd1.classList.remove('active');
      bd2.classList.remove('active');
      bd3.classList.add('active');
    }
}