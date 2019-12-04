
$('#carousel').carousel({
    interval: false,
    keyboard: false,
    touch: false,
});

// for youtube 
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var youtube_player;
function onYouTubeIframeAPIReady() {
    youtube_player = new YT.Player('video-player', {
        videoId: '1NS1yxYX6IM',
        playerVars: {'autoplay':0, 'controls': 0},
    });
}