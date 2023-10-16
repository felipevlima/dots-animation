"use client"
import Dot from "./Dot";

export default function Home() {
  return (
    <div className="flex w-full h-screen items-center justify-center bg-[#ffedd5]">
      <div className="grid grid-cols-8 gap-24">
        {Array.from({ length: 64 }, (_, i) => (
          <Dot 
            key={i}
            color={getRandomColor()}
            time={Math.ceil(Math.random() * 2000)}
          />
        ))}
      </div>
    </div>
  )
}

function getRandomColor() {
  const colors = ["#f43f5e", "#8b5cf6", "#0ea5e9", "#10b981"]
  return colors[Math.floor(Math.random() * colors.length)]
}