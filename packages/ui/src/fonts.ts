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
  DSEG7Classic: { fontFamily: "DSEG7-Classic" },
  DSEG7ClassicMini: { fontFamily: "DSEG7-Classic-MINI" },
  DSEG7Modern: { fontFamily: "DSEG7-Modern" },
  DSEG7ModernMini: { fontFamily: "DSEG7-Modern-MINI" },
  DSEG14Classic: { fontFamily: "DSEG14-Classic" },
  DSEG14ClassicMini: { fontFamily: "DSEG14-Classic-MINI" },
  DSEG14Modern: { fontFamily: "DSEG14-Modern" },
  DSEG14ModernMini: { fontFamily: "DSEG14-Modern-MINI" },
}
