// packages/ui/scripts/copy-files.mjs
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import process from "node:process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packageRoot = path.resolve(__dirname, "..")

const sourceDir = path.resolve(packageRoot, "src", "fonts")
const destDir = path.resolve(packageRoot, "dist", "fonts")

try {
  console.log(`🔵 Copying fonts from ${sourceDir} to ${destDir}...`)

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source directory does not exist: ${sourceDir}`)
  }

  fs.mkdirSync(destDir, { recursive: true })
  fs.cpSync(sourceDir, destDir, { recursive: true })

  console.log("✅ Fonts copied successfully!")
} catch (err) {
  console.error("🔴 FAILED to copy fonts:", err)
  process.exit(1)
}
