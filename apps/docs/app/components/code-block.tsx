"use client"

import { codeToHtml } from "shiki"
import { useTheme } from "next-themes"
import React, { useState, useEffect } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CheckIcon, ClipboardIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { copyToClipboardWithMeta } from "./copy-button"

export function CodeBlock({
  code,
  lang,
  showLineNumbers = false,
}: {
  code: string
  lang: string
  showLineNumbers?: boolean
}) {
  const { theme } = useTheme()
  const [html, setHtml] = useState("")
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  const copyCommand = () => {
    copyToClipboardWithMeta(code)
    setHasCopied(true)
  }

  useEffect(() => {
    const highlight = async () => {
      // Determine the current theme, defaulting to 'light' on the server
      const currentTheme = theme === "system" ? "light" : theme || "light"

      let generatedHtml = await codeToHtml(code.trim(), {
        lang,
        theme: currentTheme === "dark" ? "github-dark" : "github-light",
      })

      if (showLineNumbers) {
        generatedHtml = generatedHtml.replace(
          /<pre class="/,
          '<pre data-line-numbers class="'
        )
      }
      setHtml(generatedHtml)
    }
    highlight()
  }, [code, lang, theme, showLineNumbers])

  return (
    <div
      data-rehype-pretty-code-figure=""
      className="relative mt-2 flex w-full overflow-x-auto rounded-md bg-muted"
    >
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="w-full [&>pre]:!bg-muted [&>pre]:p-4 [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>pre]:text-sm"
      />
      <div className="absolute top-2 right-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              data-slot="copy-button"
              size="icon"
              variant="ghost"
              className="size-7 opacity-70 hover:opacity-100 focus-visible:opacity-100"
              onClick={copyCommand}
            >
              <span className="sr-only">Copy</span>
              {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {hasCopied ? "Copied" : "Copy to Clipboard"}
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
