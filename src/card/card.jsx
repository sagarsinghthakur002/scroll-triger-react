import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.png'


// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const cards = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
]

function card() {
  useEffect(() => {
    gsap.utils.toArray('.card').forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: 'top 15%',
          end: 'bottom 15%',
          scrub: true,
        },
      })
    })
  }, [])

  return (
    <div className='sticky text-white flex flex-col items-center gap-10 py-[22vh] px-4'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='card sticky top-[15vh] w-full max-w-4xl h-[60vh] bg-[#1E1E2F] rounded-2xl shadow-lg flex flex-col items-center justify-center text-center px-6 md:px-24'
        >
          <img src={card.img} alt={`Card image ${index + 1}`} className='w-24 mb-4' />
          <h1 className='text-3xl font-semibold mb-4'>Title</h1>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam alias labore.
          </p>
          <p>
            Accusantium deleniti iure, veritatis nihil pariatur magni fugit doloribus molestias.
          </p>
          <button className='bg-[#FF4D00] hover:bg-orange-600 transition-colors duration-300 text-white font-medium rounded-lg px-6 py-2 mt-6'>
            Read More
          </button>
        </div>
      ))}
    </div>
  )
}

export default card
