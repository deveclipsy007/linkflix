/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_EMAIL: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_YOUTUBE_URL: string
  readonly VITE_DX_TECH_URL: string
  readonly VITE_FRAME_TO_MONEY_URL: string
  readonly VITE_PROFILE_NAME: string
  readonly VITE_PROFILE_TITLE: string
  readonly VITE_HERO_VIDEO_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
