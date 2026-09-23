<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Beranda",
});

// Interactive Slider 1: FTracker Expense Trend (-40% to +40%)
const expenseDelta = ref(12);

const expenseStatus = computed(() => {
  const val = Number(expenseDelta.value);
  if (val <= -10) {
    return {
      text: "Pengeluaran turun signifikan (Optimal)",
      colorClass: "text-down",
      label: `${val}% dibanding minggu lalu`,
    };
  } else if (val < 5) {
    return {
      text: "Relatif stabil",
      colorClass: "text-muted",
      label: `${val >= 0 ? '+' : ''}${val}% dibanding minggu lalu`,
    };
  } else if (val < 25) {
    return {
      text: "Perlu evaluasi (Pengeluaran naik)",
      colorClass: "text-up",
      label: `+${val}% dibanding minggu lalu`,
    };
  } else {
    return {
      text: "Waspada: Latte Factor terdeteksi tinggi",
      colorClass: "text-up font-bold",
      label: `+${val}% dibanding minggu lalu`,
    };
  }
});

// Interactive Slider 2: AEGIS Power Load (0 W to 2200 W)
const currentWatts = ref(1560);
const MAX_WATTS = 2200;
const THRESHOLD = 0.7;

// Dynamic fuzzy membership calculation for "Tinggi"
const fuzzyHigh = computed(() => {
  const w = Number(currentWatts.value);
  // Linear ramp between 900W and 2000W
  if (w <= 900) return 0;
  if (w >= 2000) return 1;
  return Number(((w - 900) / (2000 - 900)).toFixed(2));
});

const loadStatus = computed(() => {
  const membership = fuzzyHigh.value;
  if (membership >= THRESHOLD) {
    return {
      statusText: "Beban Kritis: Load Shedding Aktif",
      colorClass: "text-up font-bold",
      desc: "Relay memutus daya pada saklar non-prioritas",
    };
  } else if (membership >= 0.45) {
    return {
      statusText: "Dipantau, mendekati batas",
      colorClass: "text-muted",
      desc: "Konsumsi daya tinggi namun masih dalam batas aman",
    };
  } else {
    return {
      statusText: "Beban normal & aman",
      colorClass: "text-down",
      desc: "Konsumsi daya stabil di bawah batas kuota",
    };
  }
});

// Fetch latest blog posts
const { data: latestArticles } = await useAsyncData("home-latest-blogs", () => {
  return queryCollection("blog")
    .where("path", "!=", "/blog")
    .order("publishedAt", "DESC")
    .limit(3)
    .all();
});
</script>

<template>
  <div class="space-y-16 sm:space-y-20">
    <!-- ======================================================== -->
    <!-- HERO SECTION                                             -->
    <!-- ======================================================== -->
    <section class="space-y-6 pt-2">
      <!-- Subhead (Identity & Education) -->
      <div class="text-xs sm:text-sm font-mono text-muted">
        Software engineer di Balikpapan, lulusan S1 Informatika Universitas Mulia Balikpapan (2026).
      </div>

      <!-- Main Headline: Two Concrete Evidences -->
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink tracking-tight leading-[1.2]">
        Aplikasi keuangan yang sudah live, dan dashboard listrik yang mengatur bebannya sendiri.
      </h1>

      <!-- Body / Summary -->
      <p class="text-base sm:text-lg text-ink font-body leading-relaxed max-w-3xl">
        Saya membangun web dengan Nuxt dan Supabase, dan sistem IoT dengan Python dan MQTT. Dua proyek di bawah dikerjakan dari rancangan sampai berjalan.
      </p>

      <!-- Action Buttons & Availability Note -->
      <div class="space-y-3 pt-2">
        <div class="flex flex-wrap items-center gap-3">
          <a
            href="#proyek"
            class="px-5 py-2.5 rounded bg-ink text-paper font-display text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Lihat proyek
          </a>

          <NuxtLink
            to="/about"
            class="px-4 py-2.5 rounded panel text-ink font-display text-sm font-medium hover:border-ink transition-colors"
          >
            Unduh CV
          </NuxtLink>

          <a
            href="mailto:andimarsituru@gmail.com"
            class="px-4 py-2.5 text-muted hover:text-ink font-display text-sm font-medium transition-colors"
          >
            Kirim email
          </a>
        </div>

        <p class="text-xs text-muted font-body">
          Terbuka untuk kerja full-time atau remote, dan proyek freelance.
        </p>
      </div>

      <!-- ======================================================== -->
      <!-- INTERACTIVE SLIDERS: DEMO THE ACTUAL LOGIC               -->
      <!-- ======================================================== -->
      <div class="panel p-5 sm:p-7 space-y-6 mt-8 bg-paper">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-rule">
          <!-- Slider 1: FTracker Expense Trend Indicator -->
          <div class="space-y-3 md:pr-4">
            <div>
              <div class="font-display font-bold text-base text-ink">
                Tren pengeluaran
              </div>
              <div class="text-xs text-muted font-body">
                Cara kerja indikator warna di FTracker
              </div>
            </div>

            <!-- Slider control -->
            <div class="space-y-1.5 pt-1">
              <div class="flex justify-between text-xs font-mono text-muted">
                <span>Selisih pengeluaran dibanding minggu lalu</span>
                <span>-40% s.d. +40%</span>
              </div>
              <input
                v-model="expenseDelta"
                type="range"
                min="-40"
                max="40"
                step="1"
                class="w-full h-1.5 bg-rule rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <!-- Metric & Live Result -->
            <div class="pt-2 flex items-baseline justify-between border-t border-rule/50">
              <span class="font-mono text-xl sm:text-2xl font-bold" :class="expenseStatus.colorClass">
                {{ expenseStatus.label }}
              </span>
              <span class="text-xs font-display font-medium" :class="expenseStatus.colorClass">
                {{ expenseStatus.text }}
              </span>
            </div>
          </div>

          <!-- Slider 2: AEGIS Power Load Shedding -->
          <div class="space-y-3 pt-6 md:pt-0 md:pl-8">
            <div>
              <div class="font-display font-bold text-base text-ink">
                Beban daya
              </div>
              <div class="text-xs text-muted font-body">
                Cara AEGIS memutuskan kapan mematikan beban
              </div>
            </div>

            <!-- Slider control -->
            <div class="space-y-1.5 pt-1">
              <div class="flex justify-between text-xs font-mono text-muted">
                <span>Beban rumah saat ini</span>
                <span>0 W s.d. {{ MAX_WATTS.toLocaleString() }} W</span>
              </div>
              <input
                v-model="currentWatts"
                type="range"
                min="0"
                :max="MAX_WATTS"
                step="20"
                class="w-full h-1.5 bg-rule rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <!-- Metric & Live Result -->
            <div class="pt-2 space-y-1 border-t border-rule/50">
              <div class="flex items-baseline justify-between">
                <span class="font-mono text-xl sm:text-2xl font-bold" :class="loadStatus.colorClass">
                  {{ Number(currentWatts).toLocaleString() }} W
                </span>
                <span class="text-xs font-mono text-muted">
                  keanggotaan &ldquo;tinggi&rdquo;: <strong class="text-ink">{{ fuzzyHigh.toFixed(2) }}</strong> (ambang: {{ THRESHOLD }})
                </span>
              </div>
              <div class="text-xs font-display font-medium" :class="loadStatus.colorClass">
                {{ loadStatus.statusText }} &mdash; <span class="text-muted font-normal font-body">{{ loadStatus.desc }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footnote note -->
        <div class="text-[11px] font-mono text-muted pt-2 border-t border-rule/60">
          Ilustrasi konsep dua proyek di bawah. Angka dan ambang hanya contoh.
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- CASE STUDIES SECTION                                     -->
    <!-- ======================================================== -->
    <section id="proyek" class="space-y-8 scroll-mt-12">
      <div class="border-b border-rule pb-3 flex items-baseline justify-between">
        <div>
          <h2 class="text-2xl sm:text-3xl font-display font-bold text-ink">
            Proyek
          </h2>
          <p class="text-sm text-muted font-body mt-0.5">
            Dua studi kasus rekayasa dari rancangan arsitektur sampai berjalan.
          </p>
        </div>
      </div>

      <!-- Case Study 1: FTracker -->
      <CaseStudyCard
        title="FTracker"
        tagline="Pelacak keuangan untuk mahasiswa, tersedia di web dan Android."
        problem="Pengeluaran kecil harian (Latte Factor) jarang terasa sampai sudah menumpuk."
        :decisions="[
          'Row Level Security di PostgreSQL, jadi data tiap pengguna terisolasi di level basis data.',
          'Warna indikator berubah mengikuti tren pengeluaran, supaya kebiasaan buruk terlihat sebelum terlambat.',
          'Satu basis kode: Nuxt 4 untuk web, CapacitorJS untuk APK Android.'
        ]"
        results="Sudah live di Vercel dan Supabase, dan tersedia sebagai APK."
        resultsPlaceholder="[isi hasil uji yang kamu ukur sendiri, mis. tingkat akurasi pencatatan atau feedback mahasiswa]"
        techStack="Dibangun dengan Nuxt 4, Supabase (PostgreSQL), CapacitorJS, dan Tailwind CSS v4."
        demoUrl="https://mycomun.vercel.app/"
        githubUrl="https://github.com/andimarcell"
        articleUrl="/blog/what-is-ftracker"
        image="/images/Stylish-Charcoal-FTracker-Banner.png"
        imageCaption="Screenshot asli: web dan tampilan APK"
      />

      <!-- Case Study 2: AEGIS -->
      <CaseStudyCard
        title="AEGIS"
        tagline="Dashboard monitoring daya rumah pintar dengan kendali beban otomatis."
        problem="Konsumsi daya rumah perlu diawasi dan dikendalikan tanpa campur tangan manual, sementara data sensor yang terlambat membuat grafik anjlok."
        :decisions="[
          'Fuzzy Logic Engine menentukan kapan saklar dimatikan otomatis (load shedding).',
          'Data holding: nilai terakhir ditahan saat data terlambat, sehingga grafik tidak jatuh ke nol.',
          'MQTT untuk telemetri dan Firebase RTDB untuk sinkronisasi ke dashboard.'
        ]"
        results="Diselesaikan sebagai proyek freelance."
        resultsPlaceholder="[isi angka terukur, mis. perbandingan grafik sebelum dan sesudah data holding]"
        techStack="Dibangun dengan Python (Flask), Scikit-Fuzzy, MQTT, Firebase RTDB, dan Chart.js."
        demoUrl=""
        githubUrl="https://github.com/andimarcell/aegis-monitoring-listrik-fuzzy"
        articleUrl="/blog/aegis"
        demoNote="Demo tidak dibuka untuk umum (proyek klien)"
        image="/images/AEGIS-Smart-Home-Energy-Dashboard-banner.png"
        imageCaption="Screenshot dashboard atau foto rangkaian ESP32"
      />
    </section>

    <!-- ======================================================== -->
    <!-- RECENT WRITINGS / ARTICLES                               -->
    <!-- ======================================================== -->
    <section class="space-y-6">
      <div class="border-b border-rule pb-3 flex items-baseline justify-between">
        <div>
          <h2 class="text-xl sm:text-2xl font-display font-bold text-ink">
            Tulisan Terbaru
          </h2>
          <p class="text-sm text-muted font-body mt-0.5">
            Dokumentasi keputusan teknis, arsitektur, dan catatan studi.
          </p>
        </div>

        <NuxtLink
          to="/blog"
          class="text-xs font-display font-semibold text-ink underline hover:opacity-80"
        >
          Semua tulisan &rarr;
        </NuxtLink>
      </div>

      <div class="divide-y divide-rule">
        <NuxtLink
          v-for="article in latestArticles"
          :key="article.path"
          :to="article.path"
          class="py-4 block hover:opacity-80 transition-opacity space-y-1"
        >
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 class="font-display font-bold text-base text-ink">
              {{ article.title }}
            </h3>
            <span v-if="article.publishedAt" class="text-xs font-mono text-muted shrink-0">
              {{
                new Date(article.publishedAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
            </span>
          </div>
          <p v-if="article.description" class="text-sm text-muted font-body line-clamp-2">
            {{ article.description }}
          </p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>