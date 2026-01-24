export const colors = {
  primary: {
    DEFAULT: '#243A5E',
    hover: '#1F2A44',
    light: '#2B3F6C',
    foreground: '#FFFFFF',
  },

  secondary: {
    DEFAULT: '#2EC4B6',
    hover: '#1FB6AA',
    light: '#4FD1C5',
    foreground: '#FFFFFF',
  },

  accent: {
    DEFAULT: '#F4B740',
    hover: '#E5A830',
    foreground: '#1F2A44',
  },

  success: {
    DEFAULT: '#3AC97A',
    foreground: '#FFFFFF',
  },

  warning: {
    DEFAULT: '#F4B740',
    foreground: '#1F2A44',
  },

  destructive: {
    DEFAULT: '#E57373',
    foreground: '#FFFFFF',
  },

  info: {
    DEFAULT: '#2EC4B6',
    foreground: '#FFFFFF',
  },

  background: {
    DEFAULT: '#F7F9FC',
    card: '#FFFFFF',
    muted: '#F1F3F7',
  },

  backgroundDark: {
    DEFAULT: '#0F172A',
    card: '#1E293B',
    muted: '#334155',
  },

  foreground: {
    DEFAULT: '#1F2A44',
    muted: '#64748B',
  },

  border: {
    DEFAULT: '#E2E8F0',
    dark: '#334155',
  },

  candidate: {
    bg: '#F9FAFB',
    primary: '#2B3F6C',
    accent: '#4FD1C5',
  },

  recruiter: {
    bg: '#FFFFFF',
    primary: '#243A5E',
    accent: '#2EC4B6',
  },

  charts: {
    1: '#243A5E',
    2: '#2EC4B6',
    3: '#F4B740',
    4: '#3AC97A',
    5: '#64748B',
  },
} as const;

export type ColorName = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;
