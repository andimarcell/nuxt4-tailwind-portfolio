<script setup>
useHead({
  htmlAttrs: {
    lang: "id",
  },
  titleTemplate: "%s - Andi Marcell | Software Engineer",
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
      href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
    },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
});

useSeoMeta({
  title: "Andi Marcell - Software Engineer & Web Developer",
  description:
    "Portofolio dan blog profesional Andi Marsituru Pakke, Software Engineer spesialis Nuxt 4, Vue.js, Supabase, dan sistem IoT.",
  ogTitle: "Andi Marcell - Software Engineer & Web Developer",
  ogDescription:
    "Portofolio dan blog profesional Andi Marsituru Pakke, Software Engineer spesialis Nuxt 4, Vue.js, Supabase, dan sistem IoT.",
  ogImage: "/images/Stylish-Charcoal-FTracker-Banner.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Andi Marcell - Software Engineer",
  twitterDescription:
    "Portofolio dan blog profesional Andi Marsituru Pakke, Software Engineer spesialis Nuxt 4, Vue.js, Supabase, dan sistem IoT.",
  twitterImage: "/images/Stylish-Charcoal-FTracker-Banner.png",
});
</script>

<template>
  <div class="min-h-screen relative flex flex-col selection:bg-indigo-500 selection:text-white">
    <!-- Ambient Background Lighting Effects -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <!-- Top Left Indigo Aurora -->
      <div
        class="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[100px] transform-gpu"
      ></div>
      <!-- Top Right Cyan Aurora -->
      <div
        class="absolute top-10 -right-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[120px] transform-gpu"
      ></div>
      <!-- Center Bottom Subtle Glow -->
      <div
        class="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[140px] transform-gpu"
      ></div>
      <!-- Background Mesh Pattern -->
      <div class="absolute inset-0 bg-mesh-dots opacity-40"></div>
    </div>

    <!-- Main Container -->
    <div class="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col pt-4">
      <Header />
      
      <main class="flex-1 w-full">
        <slot />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
