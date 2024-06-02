"use client";

import React, { useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

function Page() {

  let p = [
    "https://www.instagram.com/p/CzRU35kO7_5/",
    "https://www.instagram.com/p/Czhn9aLsp78/",
    "https://www.instagram.com/p/C0pVx7zOAFL/",
    "https://www.instagram.com/p/C2RDT5XMk0e/",
    "https://www.instagram.com/p/C2REDtqsn2D/",
    "https://www.instagram.com/p/C2qbYnjM6sv/",
    "https://www.instagram.com/reel/C3BYP4VulLL/",
    "https://www.instagram.com/p/C3CIGuau9Ye/",
    "https://www.instagram.com/p/C4Gppk6u0-o/",
    "https://www.instagram.com/p/C46-stpOn1t/",
    "https://www.instagram.com/p/C5FSeGgrqOV/",
    "https://www.instagram.com/reel/C5J8XyoOuLN/",
    "https://www.instagram.com/p/C5KXJ5qrqjN/",
    "https://www.instagram.com/p/C517mUHrIgS/",
    "https://www.instagram.com/p/C58gUrxrbay/",
    "https://www.instagram.com/p/C6OrADrrsp4/",
    "https://www.instagram.com/p/C7KZvQ9OBEo/"
  ]

  const [render, setRender] = useState(p.slice(p.length - 3, p.length))

  return (
    <>
      <div className="media">
          <div className="posts flex justify-center text-3xl mb-5">Posts</div>
          <div className="media-containter flex justify-center overflow-hidden">
            <div className="media flex-col justify-center space-y-5">
                {render.map((link) => (
                    <InstagramEmbed
                      width={650}
                      captioned
                      url={link}
                      key={link}
                    />
                )).reverse()}
            </div>
          </div>
          <div className="loadmore flex justify-center pt-4 pb-4">
              {render.length != p.length &&
                <button 
                className='bg-blue-500 rounded-xl hover:opacity-80 transition-colors py-4 px-6 flex justify-center space-x-2' 
                onClick={() => {
                  const increment = 3;
                  const newLength = render.length + increment;
                  setRender(p.slice(Math.max(0, p.length - newLength), p.length));
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rotate"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" /></svg>
                  <p>Load more</p>
                </button>
              }
          </div>
      </div>
    </>
  )
}

export default Page