
import React, { useEffect, useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  // const videoRef = useRef()
  // const [ playVideo, setPlayVideo ] = useState(false)

  // const handleVideo = () => {
  //   setPlayVideo((prevPlayVideo) => !prevPlayVideo)

  //   if(playVideo) {
  //     videoRef.current.pause()
  //   } else {
  //     videoRef.current.play()
  //   }
  // }

  const videoRef = useRef(null)

  const attemptPlay = () => (
    videoRef &&
      videoRef.current && 
      videoRef.current.play()
  )

  useEffect(() => {
    attemptPlay();
  }, [])

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={videoRef}
        type='video/mp4'
        playsInline
        loop
        controls={false}
        muted
      />  

      <div className='app__video-overlay flex__center' />
      
      {/* <div className='app__video-overlay flex__center'>
        <div 
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}  
        >
          {playVideo 
          ? <BsPauseFill color='#fff' fontSize={30} />
          : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div> */}
    </div>
  )
}
  


export default Intro;
