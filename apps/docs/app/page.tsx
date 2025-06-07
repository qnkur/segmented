"use client"

import React, { useState, useEffect } from "react"
import { SegmentedDisplay, type FontName } from "@qnkur/segmented"
import { Terminal } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs"
import { CodeBlockCommand } from "./components/code-block-command"
import Link from "next/link"

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
    <main>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-medium">
                @qnkur/segmented
              </CardTitle>
              <CardDescription>
                A flexible segmented display component for React, built with
                Tailwind CSS.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 items-center">
              <SegmentedDisplay
                fontFamily="DSEG7ClassicMini"
                fontWeight="bold"
                fontStyle="italic"
                className="text-4xl"
              >
                {timeString}
              </SegmentedDisplay>
              <SegmentedDisplay
                fontFamily="DSEG14ClassicMini"
                fontWeight="light"
                fontStyle="italic"
                className="text-xs"
              >
                {new Date()
                  .toLocaleDateString([], {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                  .replace(/,/g, "")
                  .replace(/ /g, "!")}
              </SegmentedDisplay>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <div className="w-full self-start">
                <CodeBlockCommand
                  __pnpm__="pnpm install @qnkur/segmented dseg"
                  __npm__="npm install @qnkur/segmented dseg"
                  __yarn__="yarn add @qnkur/segmented dseg"
                  __bun__="bun install @qnkur/segmented dseg"
                />
                {/* <code className="bg-muted rounded px-[0.3rem] py-[0.2rem] font-mono text-sm w-full flex items-center justify-center gap-2 whitespace-nowrap">
                  <Terminal size={16} />
                  <span>npm i @qnkur/segmented dseg</span>
                </code> */}
              </div>
              <div className="flex w-full justify-center">
                <Button variant="link" asChild>
                  <Link href="https://www.github.com/qnkur/segmented">
                    Github
                  </Link>
                </Button>
                <Button variant="link" asChild>
                  <Link href={"/docs"}>Docs</Link>
                </Button>
                <Button variant="link" asChild>
                  <Link href={"/showcase"}>Showcase</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
