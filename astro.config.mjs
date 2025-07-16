// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.laobinghu.top",
  base: "/",
  trailingSlash: "always",
  output: "static",
  compressHTML: true,

  devToolbar: {
    enabled: false,
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy:"viewport"
  },

  adapter: vercel({webAnalytics: {
      enabled: true,
    },
    imageService: true,
    devImageService: 'sharp',
    isr: {
      // 在首次请求时缓存所有页面，并保存 1 天
      expiration: 60 * 60 * 24,
    },

  }),
});