import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img1 from '../src/assets/images/img1.png'
import img2 from '../src/assets/images/img2.png'
import img3 from '../src/assets/images/img3.png'
import img4 from '../src/assets/images/img4.png'
import img5 from '../src/assets/images/img5.png'
import img6 from '../src/assets/images/img6.png'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const caes = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
]

function App() {
  useEffect(() => {
    gsap.utils.toArray('.card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          markers: true,
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
      })
    })
  }, [])

  return (
    <div className='text-white flex flex-col items-center gap-5 py-[15vh]'>
      {caes.map((caseItem, index) => (
        <div key={index} className='w-[80%] h-[60vh] sticky bg-[#1E1E2F] rounded-lg flex flex-col items-center justify-center card'>
          <img src={caseItem.img} className='w-[90px]' alt={`img-${index}`} />
          <h1 className='mt-3 mb-5 text-3xl'>Title</h1>
          <p className='px-[15em] text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam alias labore.
          </p>
          <p className='px-[15em] text-center'>
            Accusantium deleniti iure, veritatis nihil pariatur magni fugit doloribus molestias.
          </p>
          <button className='bg-[#FF4D00] text-white rounded-lg px-4 py-2 mt-6'>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default App
