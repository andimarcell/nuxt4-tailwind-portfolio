<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Projects",
});

const { data: page } = await useAsyncData("project-page", () => {
  return queryCollection("page").path("/project").first();
});

useSeoMeta({
  title: "Projects & Portfolio - Andi Marsituru Pakke",
  description: "Daftar proyek unggulan, riset aplikasi hybrid, dan sistem monitoring IoT oleh Andi Marsituru Pakke.",
  ogTitle: "Projects & Portfolio - Andi Marsituru Pakke",
  ogDescription: "Daftar proyek unggulan, riset aplikasi hybrid, dan sistem monitoring IoT oleh Andi Marsituru Pakke.",
});

const featuredProjects = [
  {
    title: "FTracker: Dynamic Finance Tracker",
    badge: "Flagship Project · Thesis to Production",
    category: "Nuxt 4 · Supabase RLS · CapacitorJS · Tailwind CSS",
    description:
      "Aplikasi pelacak keuangan hybrid mahasiswa berkinerja tinggi. Mengatasi masalah Latte Factor dengan fitur unggulan Dynamic Trend Color Indicator, enkripsi Row Level Security (RLS) di tingkat database, haptic feedback, dan arsitektur hybrid yang dapat dijalankan sebagai Web PWA maupun Android APK.",
    image: "/images/Stylish-Charcoal-FTracker-Banner.png",
    demoUrl: "https://mycomun.vercel.app/",
    articleUrl: "/blog/what-is-ftracker",
    githubUrl: "https://github.com/andimarcell",
    stack: ["Nuxt 4", "Supabase", "PostgreSQL RLS", "CapacitorJS", "Tailwind CSS v4"],
    metrics: [
      { label: "Platform", value: "Web & Android APK" },
      { label: "Security", value: "Database RLS" },
      { label: "Status", value: "Live in Production" },
    ],
  },
  {
    title: "Sistem AEGIS: Smart Home IoT Monitoring Dashboard",
    badge: "Freelance Project · Real-time IoT & AI",
    category: "Python · Fuzzy Logic · Firebase RTDB · MQTT · Chart.js",
    description:
      "Dashboard monitoring konsumsi daya rumah pintar terintegrasi dengan kecerdasan buatan Fuzzy Logic Engine. Mampu mengendalikan saklar secara otomatis (Automated Load Shedding), menyamakan skala dinamis pada grafik (Dynamic Axis Scaling), dan meniadakan drop grafik sensor (Data Holding Logic).",
    image: "/images/AEGIS-Smart-Home-Energy-Dashboard-banner.png",
    demoUrl: null,
    articleUrl: "/blog/aegis",
    githubUrl: "https://github.com/andimarcell/aegis-monitoring-listrik-fuzzy",
    stack: ["Python (Flask)", "Scikit-Fuzzy", "MQTT Protocol", "Firebase RTDB", "Chart.js"],
    metrics: [
      { label: "Engine", value: "Fuzzy Logic AI" },
      { label: "Protocol", value: "MQTT & WebSockets" },
      { label: "Latency", value: "Zero Spike Drop" },
    ],
  },
];
</script>

<template>
  <div class="space-y-12 sm:space-y-16">
    <!-- Header -->
    <section class="space-y-4 max-w-2xl">
      <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-medium border border-indigo-200/60 dark:border-indigo-800/60">
        <Icon name="folder" class="w-3.5 h-3.5" />
        <span>Portfolio &amp; Showcase</span>
      </div>

      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Proyek Rekayasa &amp; Karya Unggulan
      </h1>

      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        Koleksi aplikasi web berskala penuh, dashboard IoT telemetri, dan repositori open-source yang merefleksikan dedikasi saya terhadap performa, keamanan, dan keindahan antarmuka.
      </p>
    </section>

    <!-- Flagship Case Studies -->
    <section class="space-y-8">
      <div class="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-slate-800/80">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <span>Studi Kasus Proyek Unggulan</span>
        </h2>
        <span class="text-xs font-mono text-slate-400 dark:text-slate-500">
          2 Proyek Pilihan
        </span>
      </div>

      <div class="space-y-10">
        <div
          v-for="project in featuredProjects"
          :key="project.title"
          class="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-md group"
        >
          <!-- Project Banner -->
          <div class="relative overflow-hidden aspect-[21/9] sm:aspect-[24/9] bg-slate-100 dark:bg-slate-800">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-indigo-600/90 backdrop-blur-md text-white border border-white/20 shadow-sm">
                {{ project.badge }}
              </span>
              <div class="flex items-center space-x-2">
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-3 py-1 rounded-xl text-xs font-semibold bg-white/90 text-slate-900 hover:bg-white backdrop-blur-md transition-colors flex items-center space-x-1"
                >
                  <Icon name="external-link" class="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-900/80 text-white hover:bg-slate-900 backdrop-blur-md transition-colors flex items-center space-x-1"
                >
                  <Icon name="github" class="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Content Details -->
          <div class="p-6 sm:p-8 space-y-6">
            <div class="space-y-2">
              <span class="text-xs font-mono font-medium text-indigo-600 dark:text-cyan-400">
                {{ project.category }}
              </span>
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {{ project.title }}
              </h3>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Key Metrics Grid -->
            <div class="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-center">
              <div v-for="m in project.metrics" :key="m.label" class="space-y-0.5">
                <div class="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">{{ m.label }}</div>
                <div class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{{ m.value }}</div>
              </div>
            </div>

            <!-- Tech Stack Tags & Deep Dive Link -->
            <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="st in project.stack"
                  :key="st"
                  class="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                  {{ st }}
                </span>
              </div>

              <NuxtLink
                :to="project.articleUrl"
                class="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                <span>Baca Studi Kasus Mendalam</span>
                <Icon name="arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Source & GitHub Repositories -->
    <section class="space-y-6">
      <div class="space-y-1">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
          <Icon name="github" class="w-5 h-5 text-slate-800 dark:text-slate-200" />
          <span>Repositori Open Source &amp; Eksplorasi</span>
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Proyek dan modul open source yang disinkronisasi langsung dari GitHub
        </p>
      </div>

      <!-- Render projectList component from content -->
      <article v-if="page" class="prose dark:prose-invert max-w-none">
        <ContentRenderer :value="page" />
      </article>
      <div v-else>
        <projectList />
      </div>
    </section>
  </div>
</template>
