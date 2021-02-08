//c//onst container = document.querySelector('.player');
//// 2. This code loads the IFrame Player API code asynchronously.
////alert("OK1");
//var tag = document.createElement('script');
//tag.src = "https://www.youtube.com/iframe_api"
//var firstScriptTag = document.getElementsByTagName('script')[0];
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//var video_link = 'EKkzbbLYPuI';
//const add = document.querySelector('.editButton');
//
//// 3. This function creates an <iframe> (and YouTube player)
////    after the API code downloads.
//add.addEventListener('click', get_video_link);
//window.addEventListener('keydown', (e) => {
//    if (e.which == 13) {
//        get_video_link();
//    }
//})
//
////alert("OK2");
//
//var player = "https://www.youtube.com/watch?v=";
//
//function get_video_link() {
//    //alert("PASSE");
//    if (document.getElementsByClassName("item_input")[0].value !== "") {
//        //    if (document.getElementsByClassName('item_input').value !== "") {
//        alert("new id");
//        const id = document.getElementsByClassName("item_input")[0].value.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
//        //alert(id);
//        var ytb = document.getElementsByClassName('yutb');
//        video_link = id;
//        alert(video_link);
//        //$('#player').load(document.getElementsByClassName("item_input")[0].value.match("v=([a-zA-Z0-9\_\-]+)&?")[1]);
//        //
//        update_ytube();
//        onYouTubeIframeAPIReady();
//        //$("#yutb").load
//        //
//        //inputValue.value = "";
//    } else {
//        alert("invalide input");
//    }
//    //alert("function");
//}
//
//function update_ytube() {
//    alert("update")
//    $("#player").load(window.location.href + "#player")
//    $(document).ready(function() {
//        setInterval(function() {
//            $("#player").load(window.location.href + " #player");
//        }, 3000);
//    });
//}
//
//function onYouTubeIframeAPIReady() {
//    alert("update_ytube");
//    $("#player").load(window.location.href + "#player")
//    player = new YT.Player('player', {
//        height: '390',
//        width: '640',
//        videoId: video_link,
//        //videoId: 'EKkzbbLYPuI',
//        events: {
//            'onReady': onPlayerRe
//            stopVideo() {
//                player.stopVideo();
//            }
//// 5. The API calls this function when the player's state changes.
////    The function indicates that when playing a video (state=1),
////    the player should play for six seconds and then stop.
//var done = false;
//
//function onPlayerStateChange(event) {
//    alert("change state");
//    if (event.data == YT.PlayerState.PLAYING && !done) {
//        setTimeout(stopVideo, 6000);
//        done = true;
//    }
//}
//
//function stopVideo() {
//    player.stopVideo();
//}
//alert("fin");