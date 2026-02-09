"use client"

export function Hero() {
  return (

    <div id="Hero" className="max-w-full mx-auto flex lg:flex-row items-center gap-12 justify-center border-black border-20 rounded-2xl">
        <div className="flex-col">
            <h1>
                TITLE HERE
            </h1>
            <h3>
                Subtitle here
            </h3>
        </div>
        <div className="flex-1 max-w-50">
            <img src="/test2.png" alt="Hero Image" className="w-full h-auto mt-6 rounded-2xl shadow-lg object-cover"/>
        </div>
    </div>
  )
}
