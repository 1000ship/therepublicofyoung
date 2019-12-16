$('#carousel').carousel({
    interval: false,
    keyboard: false,
    touch: false,
});

var youtubeLoaded = false;
var ajaxLoaded = false;
var live_code = "";
function loadYoutube ()
{
    if(!youtubeLoaded || !ajaxLoaded)
        return;
    youtube_player = new YT.Player('video-player', {
        videoId: '1NS1yxYX6IM',
        playerVars: {'autoplay':0, 'controls': 0},
    });

    live_player = new YT.Player('live-player', {
        videoId: live_code,
        playerVars: {'autoplay':0, 'controls': 0},
    });
}

// for youtube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var youtube_player;
var live_player;
function onYouTubeIframeAPIReady() {
    youtubeLoaded = true;
    loadYoutube();
}

$(function() {
    $.ajax({
        url:'https://jiwonroh67.github.io/youtube-live-code.txt',
        type:'get',
        dataType:'text',
        cache : false,
        success: function(data) {
            //서버로부터 정상적으로 응답이 왔을 때 실행
            live_code = data;
            ajaxLoaded = true;
            loadYoutube();
        },
        error: function(err) {
            //서버로부터 응답이 정상적으로 처리되지 못햇을 때 실행
            console.log("error");
        }
    });
});
