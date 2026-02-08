"use client"

import { cn } from "../lib/utils"
import { InteractiveGridPattern } from "../components/ui/interactive-grid-pattern"
import { BRAND } from "../data/brand"
import { SparklesText } from "./ui/sparkles-text"
import { WordRotate } from "./ui/word-rotate"
import { PixelImage } from "./ui/pixel-image"
export function Hero() {
  return (

    <div id="Hero" className="mb-10 flex">
        <div className="bg-background relative flex h-100 w-full items-center justify-center overflow-hidden rounded-lg border">
            <InteractiveGridPattern
                className={cn("mask-[radial-gradient(400px_circle_at_center,white,transparent)]")}
                width={20}
                height={20}
                squares={[80, 80]}
                squaresClassName="hover:fill-blue-500"
            />
            <div className="text-center">  
                <SparklesText className="">{BRAND.name}</SparklesText>
                <WordRotate
                    className="text-2xl"
                    words={BRAND.slogans}
                />
            </div>
            <div className="h-65 ml-10">
                <PixelImage src="/unit-load-strapper.jpg" grid="4x6"/>   
            </div>
        </div>
    </div>
  )
}
