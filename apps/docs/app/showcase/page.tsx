"use client"

import React, { useState } from "react"
import { SegmentedDisplay, type FontName } from "@qnkur/segmented"

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
    <div className="rounded-lg px-4">
      <h3 className="text-lg font-medium mb-2">{fontFamily}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-10 px-2 mb-8">
        {fontStyles.map((fontStyle) =>
          fontWeights.map((fontWeight) => (
            <div key={`${fontFamily}-${fontStyle}-${fontWeight}`}>
              <div className={`text-xs opacity-50`}>
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
              >
                {text}
              </SegmentedDisplay>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default function SegmentalDisplayShowcase() {
  const [displayText, setDisplayText] = useState("12:34:56")

  return (
    <div className="py-6 px-12">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Segmented Styles</h1>
        <span>
          <p className="text-sm">
            A showcase of the{" "}
            <a className="" href="https://github.com/keshikan/DSEG">
              DSEG font families by Keshikan
            </a>
            .
          </p>
        </span>
      </div>

      <div className="mb-12">
        <label htmlFor="displayText" className="block text-md font-medium mb-2">
          Enter your text
        </label>
        <input
          type="text"
          id="displayText"
          className="block w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
          value={displayText}
          onChange={(e) => setDisplayText(e.target.value)}
          placeholder="Enter text to display..."
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">7-Segment Fonts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        <h2 className="text-lg font-medium mb-4">14-Segment Fonts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
