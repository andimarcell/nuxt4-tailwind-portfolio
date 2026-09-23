<script setup>
useHead({
  htmlAttrs: {
    lang: "id",
  },
  titleTemplate: "%s - Andi Marsituru Pakke",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Newsreader:opsz,wght@6..72,400..600&family=JetBrains+Mono:wght@400;500&display=swap",
    },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
});

useSeoMeta({
  title: "Andi Marsituru Pakke - Software Engineer",
  description:
    "Aplikasi keuangan yang sudah live, dan dashboard listrik yang mengatur bebannya sendiri. Software engineer di Balikpapan.",
  ogTitle: "Andi Marsituru Pakke - Software Engineer",
  ogDescription:
    "Aplikasi keuangan yang sudah live, dan dashboard listrik yang mengatur bebannya sendiri. Software engineer di Balikpapan.",
  ogImage: "/images/Stylish-Charcoal-FTracker-Banner.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-paper text-ink transition-colors duration-200">
    <div class="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
      <Header />
      
      <main class="flex-1 w-full py-4">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
