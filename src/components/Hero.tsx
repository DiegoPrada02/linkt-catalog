"use client"

import Slider from "./ui/Slider"


export function Hero() {
  return (
    <div id="Hero">
        <Slider
            imageUrl={["/test5.jpg","/test4.jpg"]}
            title={['TITLE GOES HERE']}
            subtitle={['Subtitle goes here']}
        />
    </div>
  )
}
