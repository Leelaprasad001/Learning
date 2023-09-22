import React from 'react'

function Hero({heroName}) {
    if(heroName === 'joker'){
        throw new Error('not a hero')
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
