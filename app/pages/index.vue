<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Home",
});

// Fetch latest blog posts from Nuxt Content
const { data: latestArticles } = await useAsyncData("home-latest-blogs", () => {
  return queryCollection("blog")
    .where("path", "!=", "/blog")
    .order("publishedAt", "DESC")
    .limit(3)
    .all();
});

// Tech stack items with badges and descriptions
const techStack = [
  { name: "Nuxt 4", category: "Framework", icon: "zap", color: "from-emerald-500 to-teal-600" },
  { name: "Vue.js 3", category: "Frontend", icon: "code", color: "from-green-500 to-emerald-600" },
  { name: "Tailwind CSS v4", category: "Styling", icon: "sparkles", color: "from-cyan-500 to-blue-600" },
  { name: "Supabase & RLS", category: "Backend / DB", icon: "layers", color: "from-emerald-600 to-green-700" },
  { name: "Python & IoT", category: "Hardware & AI", icon: "cpu", color: "from-amber-500 to-orange-600" },
  { name: "CapacitorJS", category: "Mobile Hybrid", icon: "terminal", color: "from-blue-500 to-indigo-600" },
];

const featuredProjects = [
  {
    title: "FTracker: Hybrid Finance Tracker",
    badge: "Flagship Project",
    category: "Nuxt 4 · Supabase RLS · CapacitorJS",
    description:
      "Aplikasi pelacak keuangan mahasiswa berkinerja tinggi yang berevolusi dari riset skripsi menjadi produk hybrid market-ready dengan Dynamic Trend Indicator dan visualisasi arus kas reaktif.",
    image: "/images/Stylish-Charcoal-FTracker-Banner.png",
    demoUrl: "https://mycomun.vercel.app/",
    articleUrl: "/blog/what-is-ftracker",
    githubUrl: "https://github.com/andimarcell",
    highlights: ["Row Level Security (RLS)", "Haptic Feedback", "Mobile Native APK", "Zero-Latency Input"],
  },
  {
    title: "Sistem AEGIS: Smart Home IoT Monitoring",
    badge: "Freelance & AI IoT",
    category: "Python · Fuzzy Logic · Firebase RTDB · MQTT",
    description:
      "Dashboard monitoring konsumsi energi listrik rumah pintar secara real-time yang terintegrasi dengan kecerdasan buatan Fuzzy Logic Engine untuk otomatisasi load shedding dan pencegahan anomali visual.",
    image: "/images/AEGIS-Smart-Home-Energy-Dashboard-banner.png",
    demoUrl: null,
    articleUrl: "/blog/aegis",
    githubUrl: "https://github.com/andimarcell/aegis-monitoring-listrik-fuzzy",
    highlights: ["Fuzzy Inference Engine", "Dynamic Axis Scaling", "MQTT Telemetry", "Firebase Sync"],
  },
];
</script>

<template>
  <div class="space-y-16 sm:space-y-24">
    <!-- ======================================================== -->
    <!-- HERO SECTION                                             -->
    <!-- ======================================================== -->
    <section class="pt-6 sm:pt-10">
      <div class="space-y-6 max-w-3xl">
        <!-- Status Pill -->
        <div class="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-medium text-indigo-700 dark:text-indigo-300">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Software Engineering Opportunities</span>
          <span class="text-slate-300 dark:text-slate-700">|</span>
          <span class="font-mono text-[11px] text-slate-500 dark:text-slate-400">Balikpapan, ID</span>
        </div>

        <!-- Headline -->
        <div class="space-y-3">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Membangun Web Modern yang <span class="gradient-text">Cepat, Presisi,</span> &amp; Memanjakan Mata.
          </h1>
          <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Halo, saya <span class="font-semibold text-slate-900 dark:text-white">Andi Marsituru Pakke</span> — Software Engineer yang berfokus pada ekosistem <span class="text-indigo-600 dark:text-indigo-400 font-medium">Nuxt 4</span>, arsitektur database <span class="text-emerald-600 dark:text-emerald-400 font-medium">Supabase</span>, serta integrasi sistem data reaktif &amp; IoT.
          </p>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <NuxtLink
            to="/project"
            class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Jelajahi Proyek</span>
            <Icon name="arrow-right" class="w-4 h-4" />
          </NuxtLink>

          <NuxtLink
            to="/blog"
            class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            <Icon name="book-open" class="w-4 h-4 text-slate-400" />
            <span>Baca Blog</span>
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span>Tentang Saya</span>
            <Icon name="arrow-up-right" class="w-3.5 h-3.5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- TECH STACK & COMPETENCY BENTO                            -->
    <!-- ======================================================== -->
    <section class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center space-x-2">
            <span>Teknologi &amp; Keahlian Inti</span>
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Fondasi teknologi yang saya gunakan untuk mewujudkan produk digital tangguh
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div
          v-for="item in techStack"
          :key="item.name"
          class="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 group"
        >
          <div
            class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-110 group-hover:text-indigo-500 transition-all duration-200"
          >
            <Icon :name="item.icon" class="w-5 h-5" />
          </div>
          <div>
            <div class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ item.name }}
            </div>
            <div class="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-0.5">
              {{ item.category }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- FEATURED PROJECTS SPOTLIGHT                              -->
    <!-- ======================================================== -->
    <section class="space-y-8">
      <div class="flex items-end justify-between">
        <div>
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Karya Unggulan
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Proyek Pilihan &amp; Studi Kasus
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 max-w-lg mt-1">
            Eksplorasi mendalam dari riset akademis hingga implementasi sistem berbasis IoT dan aplikasi web live.
          </p>
        </div>

        <NuxtLink
          to="/project"
          class="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <span>Semua Proyek</span>
          <Icon name="arrow-right" class="w-3.5 h-3.5" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="project in featuredProjects"
          :key="project.title"
          class="glass-panel rounded-3xl overflow-hidden flex flex-col group hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
        >
          <!-- Project Banner Image -->
          <div class="relative overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-slate-800">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 backdrop-blur-md text-white border border-white/10 shadow-sm">
                {{ project.badge }}
              </span>
            </div>
          </div>

          <!-- Project Details -->
          <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <div class="text-xs font-mono text-indigo-600 dark:text-cyan-400 font-medium">
                {{ project.category }}
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Highlight Badges -->
              <div class="flex flex-wrap gap-1.5 pt-2">
                <span
                  v-for="hl in project.highlights"
                  :key="hl"
                  class="text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono"
                >
                  {{ hl }}
                </span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center space-x-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <Icon name="external-link" class="w-3.5 h-3.5" />
                  <span>Live App</span>
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <Icon name="github" class="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              <NuxtLink
                :to="project.articleUrl"
                class="inline-flex items-center space-x-1 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400"
              >
                <span>Studi Kasus</span>
                <Icon name="arrow-right" class="w-3.5 h-3.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- LATEST ARTICLES / INSIGHTS                               -->
    <!-- ======================================================== -->
    <section class="space-y-6">
      <div class="flex items-end justify-between">
        <div>
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Penulisan &amp; Dokumentasi
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
            Artikel Terbaru
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 max-w-lg mt-1">
            Catatan proses rekayasa perangkat lunak, arsitektur sistem, dan tutorial web development.
          </p>
        </div>

        <NuxtLink
          to="/blog"
          class="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <span>Buka Semua Artikel</span>
          <Icon name="arrow-right" class="w-3.5 h-3.5" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <NuxtLink
          v-for="article in latestArticles"
          :key="article.path"
          :to="article.path"
          class="glass-panel rounded-2xl p-5 flex flex-col justify-between group hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200"
        >
          <div class="space-y-3">
            <div class="flex items-center space-x-2 text-[11px] font-mono text-slate-400 dark:text-slate-500">
              <Icon name="calendar" class="w-3.5 h-3.5" />
              <span>
                {{ article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("id-ID", { year: "numeric", month: "short", day: "numeric" }) : 'Recent' }}
              </span>
            </div>
            <h3 class="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
              {{ article.title }}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {{ article.description }}
            </p>
          </div>

          <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-medium text-indigo-600 dark:text-indigo-400">
            <span>Baca Selengkapnya</span>
            <Icon name="arrow-right" class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- CALL TO ACTION / COLLABORATE CARD                        -->
    <!-- ======================================================== -->
    <section>
      <div class="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-10 border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5">
        <!-- Glow orb in background -->
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-2xl space-y-4">
          <div class="inline-flex items-center space-x-2 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
            <Icon name="sparkles" class="w-3.5 h-3.5 text-indigo-500" />
            <span>Mari Bekerja Sama</span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Punya ide proyek menarik atau ingin merekrut Software Engineer?
          </h2>

          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Saya terbuka untuk diskusi peluang kerja (Full-time / Remote), proyek freelance pembuatan aplikasi web berskala produksi, dashboard data reaktif, ataupun sistem IoT.
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://linkedin.com/in/andimarcell"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-md shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
            >
              <Icon name="linkedin" class="w-4 h-4" />
              <span>Hubungi via LinkedIn</span>
            </a>

            <NuxtLink
              to="/about"
              class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Icon name="user" class="w-4 h-4" />
              <span>Lihat Profil &amp; Pengalaman</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>