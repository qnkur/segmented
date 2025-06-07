"use client"

import * as React from "react"
import { CheckIcon, ClipboardIcon, TerminalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { copyToClipboardWithMeta } from "./copy-button"

export function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<"pre"> & {
  __npm__?: string
  __yarn__?: string
  __pnpm__?: string
  __bun__?: string
}) {
  const [hasCopied, setHasCopied] = React.useState(false)
  const [packageManager, setPackageManager] = React.useState("npm")

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  const tabs = React.useMemo(() => {
    return {
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    }
  }, [__npm__, __pnpm__, __yarn__, __bun__])

  const copyCommand = React.useCallback(() => {
    const command = {
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    }[packageManager]
    if (!command) {
      return
    }
    copyToClipboardWithMeta(command)
    setHasCopied(true)
  }, [packageManager])

  return (
    <div className="flex w-full bg-muted overflow-x-auto">
      <Tabs
        value={packageManager}
        className="gap-0 w-full flex"
        onValueChange={(value) => {
          setPackageManager(value)
        }}
      >
        <div className="border-border/50 flex w-full items-center gap-2 border-b px-3 py-1">
          <div className="bg-foreground flex size-4 items-center justify-center rounded-[1px] opacity-70">
            <TerminalIcon className="text-code size-3" />
          </div>
          <div className="flex w-full justify-between">
            <TabsList className="rounded-none bg-transparent p-0">
              {Object.entries(tabs).map(([key]) => {
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-accent data-[state=active]:border-input h-7 border border-transparent pt-0.5 data-[state=active]:shadow-none"
                  >
                    {key}
                  </TabsTrigger>
                )
              })}
            </TabsList>
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
        <div className="no-scrollbar overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => {
            return (
              <TabsContent key={key} value={key} className="px-4 py-2">
                <pre>
                  <code
                    className="relative font-mono text-sm leading-none"
                    data-language="bash"
                  >
                    {value}
                  </code>
                </pre>
              </TabsContent>
            )
          })}
        </div>
      </Tabs>
    </div>
  )
}
