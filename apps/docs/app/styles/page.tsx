"use client"

import React, { useState } from "react"
import { SegmentedDisplay, type FontName } from "@qnkur/segmented"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FontWeight = "light" | "normal" | "bold"
type FontStyle = "normal" | "italic"

const fontFamiliesDSEG7: FontName[] = [
  "DSEG7Classic",
  "DSEG7ClassicMini",
  "DSEG7Modern",
  "DSEG7ModernMini",
]

const fontFamiliesDSEG14: FontName[] = [
  "DSEG14Classic",
  "DSEG14ClassicMini",
  "DSEG14Modern",
  "DSEG14ModernMini",
]

const fontWeights: FontWeight[] = ["light", "normal", "bold"]
const fontStyles: FontStyle[] = ["normal", "italic"]

const FontFamilyCard = ({
  fontFamily,
  text,
}: {
  fontFamily: FontName
  text: string
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{fontFamily}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
        {fontStyles.map((fontStyle) =>
          fontWeights.map((fontWeight) => (
            <div key={`${fontFamily}-${fontStyle}-${fontWeight}`}>
              <div className="mb-2 text-sm text-muted-foreground">
                <span className={`font-${fontWeight} ${fontStyle}`}>
                  {fontWeight}
                </span>{" "}
                {fontStyle !== "normal" && (
                  <span className={`font-${fontWeight} ${fontStyle}`}>
                    {fontStyle}
                  </span>
                )}
              </div>
              <SegmentedDisplay
                fontFamily={fontFamily}
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                className="text-xl"
              >
                {text}
              </SegmentedDisplay>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}

export default function SegmentalDisplayStyles() {
  const [displayText, setDisplayText] = useState("12:34:56")

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Styles</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A showcase of the{" "}
          <a
            href="https://github.com/keshikan/DSEG"
            className="font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            DSEG font families by Keshikan
          </a>
          .
        </p>
      </div>

      <div className="mb-12">
        <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
          Preview
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Refer to the{" "}
          <a
            href="https://www.keshikan.net/fonts-e.html#:~:text=~-,3.5.Character%20codes,-DSEG7%20and%20DSEG14"
            className="font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            character codes
          </a>{" "}
          for a complete list of supported characters.
        </p>
        <Label htmlFor="displayText" className="mt-4 mb-3">
          Text to display
        </Label>
        <Input
          type="text"
          id="displayText"
          value={displayText}
          onChange={(e) => setDisplayText(e.target.value)}
          placeholder="Enter text to display..."
        />
      </div>

      <div className="mb-10">
        <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
          7-Segment Fonts
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {fontFamiliesDSEG7.map((fontFamily) => (
            <FontFamilyCard
              key={fontFamily}
              fontFamily={fontFamily}
              text={displayText}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
          14-Segment Fonts
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {fontFamiliesDSEG14.map((fontFamily) => (
            <FontFamilyCard
              key={fontFamily}
              fontFamily={fontFamily}
              text={displayText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
