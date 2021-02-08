//import React from 'react';
//import PropTypes from 'prop-types';
//
//
//class Youtube extends React.Component {
//    
//    state = {
//        firstScriptTag: null,
//        tag: null,
//        video_link: null,
//        done: false,
//        player: null,
//    };
//
//    componentDidMount() {
//        let firstScriptTag = document.getElementsByTagName('script')[0];
//        let tag = document.createElement('script');
//
//        tag.src = "https://www.youtube.com/iframe_api";
//        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//        this.setState({
//            firstScriptTag: firstScriptTag,
//            tag: tag,
//            player:"https://www.youtube.com/watch?v=",
//            video_link: 'EKkzbbLYPuI',
//        });
//    }
//
//    onPlayerReady(event) {
//        event.target.playVideo();
//    }
//
//    stopVideo() {
//        player.stopVideo();
//    }
//
//    onPlayerStateChange(event) {
//        alert("change state");
//        if (event.data == YT.PlayerState.PLAYING && !this.state.done) {
//            setTimeout(stopVideo, 6000);
//            this.setState({ done: true });
//        }
//    }
//
//    get_video_link() {
//        if (document.getElementsByClassName("item_input")[0].value !== "") {
//            alert("new id");
//            const id = document.getElementsByClassName("item_input")[0].value.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
//            var ytb = document.getElementsByClassName('yutb');
//            this.setState({ video_link: id });
//            alert(this.state.video_link);
//            update_ytube();
//            onYouTubeIframeAPIReady();
//        } else {
//            alert("invalide input");
//        }
//    }
//
//    update_ytube() {
//        alert("update")
//        ("#player").load(window.location.href + "#player")
//        (document).ready(function() {
//            setInterval(function() {
//                ("#player").load(window.location.href + " #player");
//            }, 3000);
//        });
//    }
//
//    onYouTubeIframeAPIReady() {
//        alert("update_ytube");
//        ("#player").load(window.location.href + "#player")
//        player = new YT.Player('player', {
//            height: '390',
//            width: '640',
//            videoId: this.state.video_link,
//            events: {
//                'onReady': this.onPlayerReady,
//                'onStateChange': onPlayerStateChange,
//            }
//        });
//        alert("videolink =" + this.state.video_link);
//    }    
//
//    render() {
//        return (
//            <div class="yutb">
//                <div class="player" id="player"></div>
//            </div>
//        );
//    }
//}
//
//export default Youtube
//

import React from 'react';
import YouTube from 'react-youtube';
 
class Youtube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video_link: "btPJPFnesV4",
            entre : this.props.data
        }
        this.checkValue();
        //this.get_video_link = this.get_video_link.bind(this);
    }

    checkValue(props) {
        //alert( "check heur");
        if(this.props.data !== " ") {
            this.get_video_link();
          alert(this.props.data);
        }else {
          this.setState({entre: "btPJPFnesV4"})
        }
      }

    get_video_link() {
        
            alert("get vidéo link");
           // this.setState({video_link: this.video_link.value.match("v=([a-zA-Z0-9\_\-]+)&?")[1]});
           //alert(this.props.data);//.value.match("v=([a-zA-Z0-9\_\-]+)&?")[1]);
            //var ytb = document.getElementsByClassName('yutb');
    }

  render() {
    const opts = {
      height: '300',
      width: '350',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 
    return <YouTube videoId={this.state.entre} opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube