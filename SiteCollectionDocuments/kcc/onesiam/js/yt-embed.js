"use strict";
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let youtubeEmbedPlayer;
function onYouTubeIframeAPIReady() {
  youtubeEmbedPlayer = new YT.Player('youtube-embed-player', {
    height: '375',
    width: '750',
    videoId: 'iXxXhhLSbJ0',
    playerVars: { autoplay : 0, controls: 1 },
    events: {      
      'onStateChange': onPlayerStateChange
    }
  });
}

const ytPoster = document.getElementById('youtube-embed-poster');
const videoTitle = document.querySelector('.video-title');
const ytPlayerPanel = document.querySelector('.videoIframePanel');
const ytPlayIcon = document.getElementById('youtube-embed-playicon');

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  document.getElementById('youtube-embed-player').style.display = 'block';
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
const done = false;


function onPlayerStateChange(event) {

  if (event.data == YT.PlayerState.ENDED && !done) {        
    showStyle(ytPoster);
    showStyle(videoTitle);
    showStyle(ytPlayIcon);
    showStyle(ytPlayerPanel);
    done = true;
  }

}
function stopVideo() {
  youtubeEmbedPlayer.stopVideo();
}

function videoClick(param) {  
  hideStyle(param);
  hideStyle(ytPlayerPanel);
  hideStyle(ytPoster);
  hideStyle(videoTitle);
  youtubeEmbedPlayer.playVideo();
}

function hideStyle(element) {
  return element.style.display = 'none'
}
function showStyle(element) {
  return element.style.display = 'block'
}