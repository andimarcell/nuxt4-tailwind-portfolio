// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true, timeline: { enabled: true } },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxtjs/color-mode", "@nuxt/content", "@nuxtjs/seo"],
  site: {
    url: "https://andimarcell.vercel.app",
    name: "Portofolio Andi Marsituru Pakke",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml",],
    },
  },
  sitemap: {
    enabled: true,
  },
  colorMode: {
    classSuffix: "",
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
            light: "github-light",
          },
        },
      },
    },
  },
});
