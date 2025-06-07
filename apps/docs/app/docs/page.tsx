import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CodeBlockCommand } from "../components/code-block-command"

export default function DocsPage() {
  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          How to install and use the `@qnkur/segmented` component.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
            Installation
          </h2>
          <p className="mt-4 text-muted-foreground">
            To get started, install the component and its peer dependencies.
          </p>
          <div className="mt-4">
            <CodeBlockCommand
              __pnpm__="pnpm install @qnkur/segmented dseg"
              __npm__="npm install @qnkur/segmented dseg"
              __yarn__="yarn add @qnkur/segmented dseg"
              __bun__="bun install @qnkur/segmented dseg"
            />
          </div>
        </div>

        <div>
          <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
            Props
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>children</CardTitle>
                <CardDescription>
                  <span className="font-mono text-sm">
                    type: React.ReactNode
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The content to display inside the component.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>fontFamily</CardTitle>
                <CardDescription>
                  <span className="font-mono text-sm">type: FontName</span>
                  <br />
                  <span className="font-mono text-sm">
                    default: 'DSEG14ClassicMini'
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The DSEG font family to use.
                </p>
              </CardContent>
            </Card>
            {/* Add more cards for your other props here */}
          </div>
        </div>
      </div>
    </div>
  )
}
