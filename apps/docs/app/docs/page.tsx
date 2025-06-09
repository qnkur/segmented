import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CodeBlockCommand } from "../components/code-block-command"
import { SegmentedDisplay } from "@qnkur/segmented"
import { CodeBlock } from "../components/code-block"

const quickStartImport = `import { SegmentedDisplay } from "@qnkur/segmented";
import "dseg/css/dseg.css";`

const quickStartUsage = `<SegmentedDisplay>Hello World</SegmentedDisplay>`

const advancedUsage = `<SegmentedDisplay
  fontFamily="DSEG7Classic"
  fontWeight="bold"
  fontStyle="italic"
  unlitSegmentOpacity={10}
  className="text-2xl text-red-500"
>
  -45.6°C
</SegmentedDisplay>`

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          How to install and use the <code>@qnkur/segmented</code> component.
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
            Quick Start
          </h2>
          <p className="mt-4 text-muted-foreground">
            Import the component and its styles, then use it in your
            application.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Import the component and styles
            </h3>
            <div className="mt-4">
              <CodeBlock code={quickStartImport} lang="tsx" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Usage with default props
            </h3>
            <p className="mt-2 text-muted-foreground">
              Using the component with default props is straightforward.
            </p>
            <div className="mt-2">
              <Card>
                <CardContent className="p-6">
                  <SegmentedDisplay>Hello World</SegmentedDisplay>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4">
              <CodeBlock code={quickStartUsage} lang="tsx" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Advanced Usage
            </h3>
            <p className="mt-2 text-muted-foreground">
              You can combine several props to create a more customized and
              advanced display. Refer to the{" "}
              <a
                href="/segmented/styles"
                className="font-medium text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                styles
              </a>{" "}
              for a complete list of supported font families.
            </p>
            <div className="mt-2">
              <Card>
                <CardContent className="p-6">
                  <SegmentedDisplay
                    fontFamily="DSEG7Classic"
                    fontWeight="bold"
                    fontStyle="italic"
                    unlitSegmentOpacity={10}
                    className="text-2xl text-red-500"
                  >
                    -45.6°C
                  </SegmentedDisplay>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4">
              <CodeBlock code={advancedUsage} lang="tsx" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
            Examples
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <p className="text-lg text-muted-foreground">
              See{" "}
              <a
                href="/segmented/examples"
                className="font-medium text-primary underline-offset-4 hover:underline"
                // target="_blank"
                rel="noopener noreferrer"
              >
                examples
              </a>
              .
            </p>
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
                  The DSEG{" "}
                  <a
                    href="/segmented/styles"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                  >
                    font family
                  </a>{" "}
                  to use.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>fontStyle</CardTitle>
                <CardDescription>
                  <span className="font-mono text-sm">
                    type: 'normal' | 'italic'
                  </span>
                  <br />
                  <span className="font-mono text-sm">default: 'normal'</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The font{" "}
                  <a
                    href="/segmented/styles"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                  >
                    style
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>fontWeight</CardTitle>
                <CardDescription>
                  <span className="font-mono text-sm">
                    type: 'light' | 'normal' | 'bold'
                  </span>
                  <br />
                  <span className="font-mono text-sm">default: 'normal'</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The font{" "}
                  <a
                    href="/segmented/styles"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    weight
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>className</CardTitle>
                <CardDescription>
                  <span className="font-mono text-sm">type: string</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Additional CSS classes to apply to the component.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>unlitSegmentOpacity</CardTitle>
                <CardDescription>
                  <span className="font-mono text-sm">type: number</span>
                  <br />
                  <span className="font-mono text-sm">default: 15</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The opacity of the unlit segments (from 0 to 100).
                </p>
              </CardContent>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle>unlitSegmentCount</CardTitle>
                <CardDescription>
                  <span className="font-mono text-sm">type: number</span>
                  <br />
                  <span className="font-mono text-sm">default: undefined</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The number of characters for the unlit background.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  )
}
