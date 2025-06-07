"use client"

import React, { useMemo } from "react"
import { FONT_DATA, FontName } from "./fonts"

type FontStyle = "normal" | "italic"
type FontWeight = "light" | "normal" | "bold"

interface BasicSegmentalDisplayProps {
  children: React.ReactNode
  fontFamily?: FontName
  fontStyle?: FontStyle
  fontWeight?: FontWeight
  className?: string
  unlitSegmentOpacity?: number
  unlitSegmentCount?: number
}

const DEFAULT_PROPS: Required<
  Omit<
    BasicSegmentalDisplayProps,
    "children" | "className" | "unlitSegmentCount"
  >
> &
  Pick<BasicSegmentalDisplayProps, "unlitSegmentCount"> = {
  fontFamily: "DSEG14ClassicMini",
  fontStyle: "normal",
  fontWeight: "normal",
  unlitSegmentOpacity: 15,
  unlitSegmentCount: undefined,
}

export default function SegmentedDisplay(props: BasicSegmentalDisplayProps) {
  const {
    children,
    fontFamily,
    fontStyle,
    fontWeight,
    className,
    unlitSegmentOpacity,
    unlitSegmentCount,
  } = { ...DEFAULT_PROPS, ...props }

  const fontProperties = useMemo(() => {
    return {
      fontFamily: FONT_DATA[fontFamily].fontFamily,
      fontStyle: fontStyle,
      fontWeight: fontWeight,
    }
  }, [fontFamily, fontStyle, fontWeight])

  const fontStyleClass = useMemo(() => {
    return fontStyle === "italic" ? "italic" : "not-italic"
  }, [fontStyle])

  const fontWeightClass = useMemo(() => {
    if (fontWeight === "light") return "font-light"
    if (fontWeight === "bold") return "font-bold"
    return "font-normal"
  }, [fontWeight])

  const unlitSegmentChar = useMemo(() => {
    const famStr = fontFamily as string
    if (famStr.includes("DSEG7")) return "8"
    if (famStr.includes("DSEG14")) return "~"
    return "~"
  }, [fontFamily])

  const processedText = useMemo(() => {
    const textContent =
      typeof children === "string" ? children : String(children)
    return textContent.replace(/ /g, "!")
  }, [children])

  const unlitSegment = useMemo(() => {
    if (unlitSegmentCount !== undefined && unlitSegmentCount >= 0) {
      return unlitSegmentChar.repeat(unlitSegmentCount)
    }
    return processedText
      .split("")
      .map((char) => {
        if (char === ":" || char === ".") {
          return char
        }
        return unlitSegmentChar
      })
      .join("")
  }, [processedText, unlitSegmentChar, unlitSegmentCount])

  const containerClasses = useMemo(
    () =>
      [
        "relative",
        "flex", // Add this
        "flex-col", // Add this
        fontStyleClass,
        fontWeightClass,
        className,
      ]
        .filter(Boolean)
        .join(" "),
    [fontStyleClass, fontWeightClass, className]
  )

  return (
    <div className={containerClasses} style={fontProperties}>
      {/* Unlit segments (background) */}
      <div className="" style={{ opacity: unlitSegmentOpacity / 100 }}>
        <span className="select-none">{unlitSegment}</span>
      </div>
      {/* Lit segments (foreground) */}
      <div className="absolute top-0 left-0">
        <span className="">{processedText}</span>
      </div>
    </div>
  )
}
