"use client"

import React from "react"
import { SegmentedDisplay } from "@qnkur/segmented"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CodeBlockCommand } from "./components/code-block-command"
import { cn } from "@/lib/utils"
import { useClock } from "./hooks/use-clock"

export default function HomePage() {
  const timeString = useClock()

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <div className={cn("flex flex-col gap-6")}>
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
            <CardContent className="flex flex-col items-center gap-2">
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
                  <Link href={"/styles"}>Styles</Link>
                </Button>
                <Button variant="link" asChild>
                  <Link href={"/examples"}>Examples</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
