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
var live_player;
function onYouTubeIframeAPIReady() {
    youtube_player = new YT.Player('video-player', {
        videoId: '1NS1yxYX6IM',
        playerVars: {'autoplay':0, 'controls': 0},
    });

    live_player = new YT.Player('live-player', {
        videoId: 'fnh4V3u9lA4',
        playerVars: {'autoplay':0, 'controls': 0},
    });
}

$(function() {
    $.ajax({
        url:'https://1000ship.github.io/youtube-live-code.txt',
        type:'get',
        dataType:'text',
        success: function(data) {
            //서버로부터 정상적으로 응답이 왔을 때 실행
            alert(1)
        },
        error: function(err) {
            //서버로부터 응답이 정상적으로 처리되지 못햇을 때 실행
            alert(2)
        }
    });
});