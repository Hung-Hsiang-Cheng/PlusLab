import React, { useRef, useState, useEffect } from "react";
import videoo from './image/zzz.mp4';
import play from './image/play.svg';
import stop from './image/stop.svg';
import fullScreen from './image/fullscreen.svg';
import smallScreen from './image/smallScreen.svg';
import videoback from './image/videoback.svg';
import videoforward from './image/videoforward.svg';
import voice from './image/voice.svg';

const VideoInterface = () => {
  const videoSelf = videoo;
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const videoControlBarRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const voiceBarRef = useRef(null);
  const voiceFillRef = useRef(null);
  const showSpeedListRef = useRef(null)
  const vidoeSpeedUlRef = useRef(null)
  const [VideoEle, setVideoEle] = useState(false);
  const [fullScreenEle, setFullScreenEle] = useState(false);
  const [className, setClassName] = useState('videoControlBar');
  const [speed, setSpeed] = useState('1')
  const [speedBtn, setSpeedBtn] = useState(false)
  // 滑鼠移動增加className
  useEffect(() => {
    const handleMouseMove = () => {
      setClassName(`${className} hover`);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // // 大於三秒沒有偵測到移動滑鼠時取消 hover 效果
  useEffect(() => {
    const timeout = setTimeout(() => {
      // setIsHovering(false);
      setClassName(className.replace(' hover', ''));
    }, 5000);

    // 在組件卸載時清除 timeout
    return () => {
      clearTimeout(timeout);
    };
  }, [className]);

  // // 捕捉影片時間渲染時間進度條
  useEffect(() => {
    const handleProgress = () => {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressBarRef.current.style.flexBasis = `${percent}%`;
    }
    videoRef.current.addEventListener('timeupdate', handleProgress);
    return () => {
      videoRef.current.removeEventListener('timeupdate', handleProgress);
    };
  }, [])

  // // 點擊時間進度調控制影片進度
  useEffect(() => {
    const scrub = (e) => {
      const scrubTime = (e.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
      videoRef.current.currentTime = scrubTime;
    }
    progressRef.current.addEventListener('click', scrub);
    return () => {
      progressRef.current.removeEventListener('click', scrub);
    };
  }, [progressRef, videoRef])

  // // 捕捉聲音渲染音量進度條
  useEffect(() => {
    const handleVolume = () => {
      const percent = (videoRef.current.volume / 1) * 100;
      voiceFillRef.current.style.flexBasis = `${percent}%`;
    }
    videoRef.current.addEventListener('volumechange', handleVolume);
    return () => {
      videoRef.current.removeEventListener('volumechange', handleVolume);
    };
  }, [])
  // 點擊音量Bar控制音量
  useEffect(() => {
    const voiceScrub = (e) => {
      const scrubV = (e.offsetX / voiceBarRef.current.offsetWidth);
      videoRef.current.volume = scrubV;
    }
    voiceBarRef.current.addEventListener('click', voiceScrub);
    return () => {
      voiceBarRef.current.removeEventListener('click', voiceScrub);
    };
  }, [])


  // 影片暫停與播放 
  const playToggle = () => {
    if (VideoEle === false) {
      setVideoEle(true); videoRef.current.play();
    } else {
      setVideoEle(false); videoRef.current.pause();
    }
  }
  // 影片快轉與倒轉
  const videoReverse = () => {
    videoRef.current.currentTime -= 15;
  }
  const videoForward = () => {
    videoRef.current.currentTime += 15;
  }
  // 全螢幕切換
  const videoFullScreen = () => {
    if (fullScreenEle === false) {
      setFullScreenEle(true);
      videoContainerRef.current.requestFullscreen();
    } else {
      setFullScreenEle(false);
      document.exitFullscreen();
    }
  }
  // 影片播放速度按鈕點擊開合
  const switchSpeed = (e) => {
    if (speedBtn === false) {
      setSpeedBtn(true);
      showSpeedListRef.current.style.display = 'flex';
    } else {
      setSpeedBtn(false);
      showSpeedListRef.current.style.display = 'none';
    }
    console.log(e.target);
  }
  // 點擊切換影片速度
  const toggleVideoSpeed = (e) => {
    setSpeed(e.target.value / 100);
    videoRef.current.playbackRate = parseFloat(e.target.value) / 100;
  }

  const stopPic = () => {
    switch (VideoEle) {
      case false:
        return (<img src={play} />)
      case true:
        return (<img src={stop} />)
      default:
        break;
    }
  }

  const fullScreenPic = () => {
    switch (fullScreenEle) {
      case false:
        return (<img src={fullScreen} />)
      case true:
        return (<img src={smallScreen} />)
      default:
        break;
    }
  }
  return (
    <div className="video" ref={videoContainerRef}  >
      <video
        onClick={playToggle}
        ref={videoRef}
        src={videoSelf}  >
      </video>
      <div className={className} ref={videoControlBarRef} >
        <div className="progress" ref={progressRef}>
          <div className="progressFilled" ref={progressBarRef}></div>
        </div>
        <div className="videoBtnContainer">
          <button onClick={videoReverse}>
            <img src={videoback} />
          </button>
        </div>
        <div className="videoBtnContainer">
          <button onClick={playToggle}>
            {stopPic()}
          </button>
        </div>
        <div className="videoBtnContainer">
          <button onClick={videoForward}>
            <img src={videoforward} />
          </button>
        </div>
        <div className="videoBtnContainer voiceBtn">
          <button>
            <img src={voice} />
          </button>
          <div className="voiceBar" ref={voiceBarRef}>
            <div className="voiceFill" ref={voiceFillRef}></div>
          </div>
        </div>
        <div className=" videoSpeed">
          <div className="videoSpeedList" ref={showSpeedListRef} onClick={toggleVideoSpeed}>
            <ul ref={vidoeSpeedUlRef}>
              <li value={200}>2x</li>
              <li value={150}>1.5X</li>
              <li value={125}>1.25x</li>
              <li value={100}>1x</li>
              <li value={75}>0.75x</li>
              <li value={50}>0.5x</li>
            </ul>
          </div>
          <button onClick={switchSpeed}><span>{speed}x</span></button>
        </div>
        <div className="videoBtnContainer fullScreenBtn">
          <button onClick={videoFullScreen}>
            {fullScreenPic()}
          </button>
        </div>


      </div>
    </div>
  )
}

export default VideoInterface;