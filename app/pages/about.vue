<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "About",
});

const { data: page } = await useAsyncData("about-page", () => {
  return queryCollection("page").path("/about").first();
});

useSeoMeta({
  title: "Tentang Andi Marsituru Pakke - Software Engineer",
  description: "Profil, pengalaman profesional, pendidikan, dan keahlian teknis Andi Marsituru Pakke.",
  ogTitle: "Tentang Andi Marsituru Pakke - Software Engineer",
  ogDescription: "Profil, pengalaman profesional, pendidikan, dan keahlian teknis Andi Marsituru Pakke.",
  keywords: "Andi Marsituru Pakke, Software Engineer, Nuxt 4, Vue.js, Supabase, Balikpapan",
  author: "Andi Marsituru Pakke",
});

const experiences = [
  {
    role: "Developer & Creator - Web & Hybrid Finance Tracker (FTracker)",
    period: "2026",
    type: "Thesis & Product Development",
    description:
      "Merancang dan membangun aplikasi pelacak keuangan reaktif berbasis Nuxt 4 dan Supabase. Mengimplementasikan Row Level Security (RLS), indikator tren dinamis (*Dynamic Trend Color Indicator*), serta adaptasi hybrid mobile menggunakan CapacitorJS.",
    tags: ["Nuxt 4", "Supabase RLS", "CapacitorJS", "Tailwind CSS"],
  },
  {
    role: "Freelance Software Engineer - Sistem AEGIS (Smart Home IoT)",
    period: "2026",
    type: "Client Project",
    description:
      "Mengembangkan dashboard monitoring energi IoT real-time dengan integrasi protokol MQTT, Firebase RTDB, dan kecerdasan buatan Fuzzy Logic Engine. Mengoptimalkan visualisasi grafik data holding logic dan automated load shedding.",
    tags: ["Python", "Fuzzy Logic", "MQTT", "Firebase RTDB", "Chart.js"],
  },
  {
    role: "Bendahara & Pengurus Organisasi - Komunitas E-Sports Nexora",
    period: "2026",
    type: "Organizational Leadership",
    description:
      "Mengelola arus kas operasional organisasi, memastikan transparansi pelaporan anggaran, serta menyusun pembukuan keuangan bulanan komunitas.",
    tags: ["Financial Reporting", "Budget Management", "Team Collaboration"],
  },
  {
    role: "Staf Operasional & Logistik - Wirausaha Keluarga",
    period: "2022 - 2025",
    type: "Operations",
    description:
      "Mengelola operasional harian toko, koordinasi inventaris stok barang secara efisien, serta melayani transaksi pelanggan secara konsisten.",
    tags: ["Inventory Control", "Customer Relations", "Logistics"],
  },
];

const skills = [
  {
    category: "Frontend & Mobile",
    items: ["Nuxt 4 / 3", "Vue.js 3", "Tailwind CSS v4", "TypeScript", "JavaScript (ESNext)", "CapacitorJS", "HTML5 & CSS3"],
  },
  {
    category: "Backend & Database",
    items: ["Supabase", "PostgreSQL", "Row Level Security (RLS)", "Firebase Realtime DB", "RESTful APIs"],
  },
  {
    category: "IoT & Hardware Automation",
    items: ["Python", "Fuzzy Logic (Scikit-Fuzzy)", "MQTT Protocol", "ESP32 Integration", "WebSockets"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git & GitHub", "Vercel", "Vite", "VS Code", "Postman / Curl", "Linux Shell"],
  },
];
</script>

<template>
  <div class="space-y-12 sm:space-y-16">
    <!-- Profile Hero Card -->
    <section class="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md">
      <!-- Glow ambient background -->
      <div class="absolute -right-20 -top-20 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
        <!-- Avatar Monogram -->
        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-cyan-500 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shadow-indigo-500/25 shrink-0">
          AP
        </div>

        <!-- Info Header -->
        <div class="space-y-2 flex-1">
          <div class="flex flex-wrap items-center gap-2">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Andi Marsituru Pakke
            </h1>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
              S.Kom
            </span>
          </div>

          <p class="text-base text-slate-600 dark:text-slate-300 font-medium">
            Software Engineer · Lulusan S1 Informatika Universitas Mulia Balikpapan
          </p>

          <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
            <span class="flex items-center space-x-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Balikpapan, Kalimantan Timur</span>
            </span>
            <span>&bull;</span>
            <span class="flex items-center space-x-1.5">
              <Icon name="briefcase" class="w-3.5 h-3.5 text-indigo-500" />
              <span>Web &amp; IoT Engineering</span>
            </span>
          </div>
        </div>

        <!-- Social CTAs -->
        <div class="flex flex-wrap md:flex-col gap-2 shrink-0 w-full sm:w-auto">
          <a
            href="https://github.com/andimarcell"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold glass-panel hover:border-indigo-400/50 dark:hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Icon name="github" class="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://linkedin.com/in/andimarcell"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            <Icon name="linkedin" class="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Bio / Philosophy -->
    <section class="space-y-4">
      <div class="flex items-center space-x-2">
        <Icon name="user" class="w-5 h-5 text-indigo-500" />
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Tentang Saya
        </h2>
      </div>

      <div class="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        <p>
          Halo! Saya <strong class="text-slate-900 dark:text-white font-semibold">Andi Marsituru Pakke</strong>, seorang Software Engineer yang berfokus pada pembangunan aplikasi web modern, arsitektur data reaktif, dan integrasi hardware pintar.
        </p>
        <p>
          Saya memiliki spesialisasi dalam ekosistem <span class="text-indigo-600 dark:text-indigo-400 font-medium">Nuxt.js</span>, <span class="text-indigo-600 dark:text-indigo-400 font-medium">Vue.js</span>, <span class="text-indigo-600 dark:text-indigo-400 font-medium">Tailwind CSS</span>, dan database <span class="text-indigo-600 dark:text-indigo-400 font-medium">Supabase</span>. Ketertarikan mendalam saya pada sistem keamanan data (seperti implementasi Row Level Security / RLS) serta visualisasi metrik performa mengarahkan saya pada perancangan software yang tidak hanya fungsional, tetapi juga aman, cepat, dan intuitif.
        </p>
        <p>
          Selain pengembangan web, saya juga berpengalaman merancang sistem kendali dan telemetri IoT (Internet of Things) menggunakan Python, protokol komunikasi MQTT, dan algoritma kecerdasan buatan Fuzzy Logic untuk otomatisasi rumah cerdas.
        </p>
      </div>
    </section>

    <!-- Education & Degree -->
    <section class="space-y-4">
      <div class="flex items-center space-x-2">
        <Icon name="book-open" class="w-5 h-5 text-indigo-500" />
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Pendidikan
        </h2>
      </div>

      <div class="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400/40 transition-colors">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">
              S1 Informatika &mdash; Universitas Mulia Balikpapan
            </h3>
            <p class="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
              Konsentrasi Software Engineering &amp; Web Development
            </p>
          </div>
          <span class="inline-flex text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
            2022 &mdash; 2026
          </span>
        </div>

        <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-sm text-slate-600 dark:text-slate-300 space-y-2">
          <p class="font-medium text-slate-800 dark:text-slate-200">
            Proyek Akhir / Skripsi:
          </p>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/80 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            &ldquo;Rancang Bangun Aplikasi Pelacak Keuangan (Finance Tracker) menggunakan Nuxt.js &amp; Supabase dengan Dynamic Trend Color Indicator untuk Mencegah Kebiasaan Latte Factor Mahasiswa.&rdquo;
          </p>
        </div>
      </div>
    </section>

    <!-- Professional Experience Timeline -->
    <section class="space-y-6">
      <div class="flex items-center space-x-2">
        <Icon name="briefcase" class="w-5 h-5 text-indigo-500" />
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Pengalaman &amp; Rekayasa Sistem
        </h2>
      </div>

      <div class="space-y-4">
        <div
          v-for="(exp, idx) in experiences"
          :key="idx"
          class="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400/40 transition-all duration-200 space-y-3"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {{ exp.role }}
            </h3>
            <span class="text-xs font-mono text-indigo-600 dark:text-cyan-400 font-medium">
              {{ exp.period }} &bull; {{ exp.type }}
            </span>
          </div>

          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ exp.description }}
          </p>

          <div class="flex flex-wrap gap-1.5 pt-1">
            <span
              v-for="tag in exp.tags"
              :key="tag"
              class="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Matrix -->
    <section class="space-y-6">
      <div class="flex items-center space-x-2">
        <Icon name="layers" class="w-5 h-5 text-indigo-500" />
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Keahlian Teknis &amp; Toolset
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="group in skills"
          :key="group.category"
          class="glass-panel rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 space-y-3"
        >
          <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {{ group.category }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.items"
              :key="skill"
              class="px-3 py-1 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-400 transition-colors"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section class="space-y-4">
      <div class="flex items-center space-x-2">
        <Icon name="sparkles" class="w-5 h-5 text-indigo-500" />
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Pencapaian Kunci
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="glass-panel p-5 rounded-2xl flex items-start space-x-3 border border-emerald-500/20 bg-emerald-500/5">
          <Icon name="check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div class="space-y-1">
            <h4 class="text-sm font-bold text-slate-900 dark:text-white">Peluncuran Aplikasi Live FTracker</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Berhasil mengembangkan aplikasi finansial hybrid dari tahapan skripsi menjadi aplikasi web dan mobile APK yang beroperasi langsung di cloud (Vercel &amp; Supabase).
            </p>
          </div>
        </div>

        <div class="glass-panel p-5 rounded-2xl flex items-start space-x-3 border border-indigo-500/20 bg-indigo-500/5">
          <Icon name="check-circle" class="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          <div class="space-y-1">
            <h4 class="text-sm font-bold text-slate-900 dark:text-white">Implementasi AI Fuzzy Logic IoT</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Menuntaskan proyek freelance sistem monitoring energi listrik cerdas AEGIS dengan akurasi telemetri tinggi dan zero-latency synchronization.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
