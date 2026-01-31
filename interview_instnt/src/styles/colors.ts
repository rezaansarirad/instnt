export const colors = {
  primary: {
    DEFAULT: "#FF671A",
    hover: "#E64D00",
    light: "#FF894D",
    foreground: "#FFFFFF",
  },

  secondary: {
    DEFAULT: "#2EC4B6",
    hover: "#1FB6AA",
    light: "#4FD1C5",
    foreground: "#FFFFFF",
  },

  accent: {
    DEFAULT: "#F4B740",
    hover: "#E5A830",
    foreground: "#1F2937",
  },

  success: {
    DEFAULT: "#3AC97A",
    foreground: "#FFFFFF",
  },

  warning: {
    DEFAULT: "#F4B740",
    foreground: "#1F2937",
  },

  destructive: {
    DEFAULT: "#E57373",
    foreground: "#FFFFFF",
  },

  info: {
    DEFAULT: "#2EC4B6",
    foreground: "#FFFFFF",
  },

  background: {
    DEFAULT: "#FFFFFF",
    card: "#FFFFFF",
    muted: "#F1F3F7",
  },

  backgroundDark: {
    DEFAULT: "#1F2937",
    card: "#1F2937",
    muted: "#334155",
  },

  foreground: {
    DEFAULT: "#1F2937",
    muted: "#64748B",
  },

  border: {
    DEFAULT: "#E2E8F0",
    dark: "#334155",
  },

  candidate: {
    bg: "#F9FAFB",
    primary: "#FF671A",
    accent: "#4FD1C5",
  },

  recruiter: {
    bg: "#FFFFFF",
    primary: "#FF671A",
    accent: "#2EC4B6",
  },

  charts: {
    1: "#FF671A",
    2: "#2EC4B6",
    3: "#F4B740",
    4: "#3AC97A",
    5: "#64748B",
  },

  brand: {
    100: "#FFCCB3",
    200: "#FFAA80",
    300: "#FF894D",
    500: "#E64D00",
    600: "#B33C00",
    700: "#802B00",
  },
} as const;

export type ColorName = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;
