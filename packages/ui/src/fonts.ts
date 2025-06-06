// packages/ui/src/fonts.ts

export type FontName =
  | "DSEG7Classic"
  | "DSEG7ClassicMini"
  | "DSEG7Modern"
  | "DSEG7ModernMini"
  | "DSEG14Classic"
  | "DSEG14ClassicMini"
  | "DSEG14Modern"
  | "DSEG14ModernMini"

export const FONT_DATA: Record<FontName, { fontFamily: string }> = {
  DSEG7Classic: { fontFamily: "DSEG7Classic" },
  DSEG7ClassicMini: { fontFamily: "DSEG7ClassicMini" },
  DSEG7Modern: { fontFamily: "DSEG7Modern" },
  DSEG7ModernMini: { fontFamily: "DSEG7ModernMini" },
  DSEG14Classic: { fontFamily: "DSEG14Classic" },
  DSEG14ClassicMini: { fontFamily: "DSEG14ClassicMini" },
  DSEG14Modern: { fontFamily: "DSEG14Modern" },
  DSEG14ModernMini: { fontFamily: "DSEG14ModernMini" },
}
