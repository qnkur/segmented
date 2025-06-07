"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { SegmentedDisplay, type FontName } from "@qnkur/segmented"

// A simple hook to create a live clock effect for the demo
const useClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timerId)
  }, [])

  return time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}

export default function HomePage() {
  const timeString = useClock()

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <section className="flex w-full flex-col items-center gap-6 py-12">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          @qnkur/segmented
        </h1>
        <p className="max-w-2xl text-lg">
          A flexible and beautiful segmented display component for React, built
          with Tailwind CSS.
        </p>

        <div className="my-8 flex w-full justify-center">
          <SegmentedDisplay
            fontFamily="DSEG7Classic"
            fontWeight="bold"
            className="text-6xl"
          >
            {timeString}
          </SegmentedDisplay>
        </div>
      </section>
    </main>
  )
}
