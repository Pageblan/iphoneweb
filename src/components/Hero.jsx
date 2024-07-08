import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {smallHeroVideo, heroVideo} from '../utils'
import { useEffect, useState } from 'react'


const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrc = () => {
      if(window.innerWidth <760){
        setvideoSrc(smallHeroVideo)
      }else{
        setvideoSrc(heroVideo)
      }
    }

    useEffect(() =>{
      window.addEventListener('resize', handleVideoSrc)

      return () =>{
        window.removeEventListener('resize', handleVideoSrc)
      }
    }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 0.5,
      ease: 'power3.in',
    })

    gsap.to('#cta', {
      y: -50,
      opacity: 1,
      delay: 2.5,
      duration: 2,
    })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative"> 
    <div className="w-full flex-col flex-center h-5/6">
      <p id='hero' className="hero-title">Iphone 15</p>
      <div className='md:w-10/12 w-9/12'>
        <video  className='pointer-events-none' autoPlay muted playsInline={true} 
          key={videoSrc}> 
          <source src={videoSrc} type='video/mp4'/>
        </video>
      </div>
    </div>

    <div id='cta' className='flex flex-col items-center opacity-0 -translate-y-20'>
      <a href='#highlights' className='btn'>Buy</a>
      <p className='font-normal text-xl'>From $199/month or $999</p>
    </div>
    </section>
  )
}

export default Hero
