// packages/ui/src/index.tsx

// Export the main component
export { default as SegmentedDisplay } from "./SegmentedDisplay"

// Re-export the FontName type directly
import type { FontName as FontNameType } from "./fonts"
export type FontName = FontNameType
