<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Tentang",
});

useSeoMeta({
  title: "Tentang - Andi Marsituru Pakke",
  description: "Profil profesional, riwayat pendidikan, pengalaman rekayasa perangkat lunak, dan keahlian teknis Andi Marsituru Pakke.",
});

const experiences = [
  {
    role: "Pengembang & Perancang &mdash; Web & Hybrid Finance Tracker (FTracker)",
    period: "2026",
    type: "Skripsi & Pengembangan Produk",
    description:
      "Merancang dan membangun aplikasi pelacak keuangan reaktif berbasis Nuxt 4 dan Supabase. Mengimplementasikan Row Level Security (RLS) pada PostgreSQL untuk isolasi mutlak data pengguna, indikator tren warna dinamis untuk mencegah kebiasaan Latte Factor, dan basis kode tunggal untuk web dan APK Android via CapacitorJS.",
    stack: "Nuxt 4, Supabase (PostgreSQL), CapacitorJS, Tailwind CSS v4",
  },
  {
    role: "Freelance Software Engineer &mdash; Sistem AEGIS (Smart Home IoT)",
    period: "2026",
    type: "Proyek Klien",
    description:
      "Mengembangkan dashboard monitoring konsumsi energi listrik terintegrasi dengan kecerdasan buatan Fuzzy Logic Engine untuk otomasi pemutusan beban berlebih (load shedding). Menerapkan algoritma penahan data (data holding) untuk meniadakan drop grafik sensor pada Chart.js dan sinkronisasi cloud real-time via MQTT & Firebase RTDB.",
    stack: "Python (Flask), Scikit-Fuzzy, MQTT, Firebase RTDB, Chart.js",
  },
  {
    role: "Bendahara & Pengurus Organisasi &mdash; Komunitas E-Sports Nexora",
    period: "2026",
    type: "Organisasi",
    description:
      "Mengelola arus kas operasional, transparansi anggaran turnamen, dan penyusunan pembukuan keuangan bulanan komunitas.",
    stack: "Manajemen Keuangan, Laporan Arus Kas",
  },
  {
    role: "Staf Operasional & Logistik &mdash; Wirausaha Keluarga",
    period: "2022 &mdash; 2025",
    type: "Operasional",
    description:
      "Mengelola operasional harian toko serta manajemen perputaran stok barang secara efisien dan konsisten.",
    stack: "Manajemen Inventaris, Pelayanan Pelanggan",
  },
];

const skills = [
  {
    category: "Frontend & Mobile",
    items: "Nuxt 4, Vue.js 3, Tailwind CSS v4, TypeScript, JavaScript (ESNext), CapacitorJS (Android APK), HTML5/CSS3",
  },
  {
    category: "Backend & Basis Data",
    items: "Supabase, PostgreSQL, Row Level Security (RLS), Firebase Realtime Database, REST APIs",
  },
  {
    category: "IoT & Komputasi Cerdas",
    items: "Python, Fuzzy Logic (Scikit-Fuzzy), Protokol MQTT, WebSockets, Hardware ESP32",
  },
  {
    category: "Alat & Alur Kerja",
    items: "Git, GitHub, Vercel, Vite, Linux Shell, VS Code",
  },
];
</script>

<template>
  <div class="space-y-12 sm:space-y-16">
    <!-- Header -->
    <section class="space-y-3 border-b border-rule pb-6">
      <div class="text-xs font-mono text-muted">
        Profil &amp; Riwayat
      </div>
      <h1 class="text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tight">
        Andi Marsituru Pakke
      </h1>
      <p class="text-base sm:text-lg text-muted font-body leading-relaxed max-w-2xl">
        Software engineer di Balikpapan, lulusan S1 Informatika Universitas Mulia Balikpapan (2026).
      </p>

      <div class="pt-2 flex flex-wrap items-center gap-3">
        <a
          href="mailto:andimarsituru@gmail.com"
          class="px-4 py-2 bg-ink text-paper rounded font-display text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          Kirim Email Langsung
        </a>
        <a
          href="https://linkedin.com/in/andimarcell"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 panel rounded text-ink font-display text-xs font-semibold hover:border-ink transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/andimarcell"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 panel rounded text-ink font-display text-xs font-semibold hover:border-ink transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>

    <!-- Bio / Tentang -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-display font-bold text-ink">
        Tentang Saya
      </h2>

      <div class="space-y-4 text-ink font-body text-base sm:text-lg leading-relaxed max-w-3xl">
        <p>
          Saya memiliki spesialisasi dalam rekayasa aplikasi web modern menggunakan ekosistem <strong class="text-ink font-semibold">Nuxt 4</strong>, arsitektur data aman dengan <strong class="text-ink font-semibold">Supabase (PostgreSQL RLS)</strong>, serta sistem telemetri IoT berbasis <strong class="text-ink font-semibold">Python dan MQTT</strong>.
        </p>
        <p>
          Pendekatan saya bertumpu pada pembangunan sistem yang nyata: menyelesaikan masalah konkret pengguna tanpa lapisan yang tidak perlu, mengisolasi data di level basis data yang paling ketat, dan merancang antarmuka yang menyajikan informasi secara jujur dan mudah dipahami.
        </p>
      </div>
    </section>

    <!-- Pendidikan -->
    <section class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-display font-bold text-ink">
        Pendidikan
      </h2>

      <div class="panel p-6 space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-rule pb-3">
          <div>
            <h3 class="font-display font-bold text-lg text-ink">
              S1 Informatika &mdash; Universitas Mulia Balikpapan
            </h3>
            <p class="text-xs font-mono text-muted">
              Fokus: Software Engineering &amp; Web Development
            </p>
          </div>
          <span class="text-xs font-mono text-muted shrink-0">
            2022 &mdash; 2026
          </span>
        </div>

        <div class="text-sm font-body text-ink space-y-1">
          <div class="text-xs font-display font-bold uppercase tracking-wider text-muted">
            Proyek Akhir (Skripsi)
          </div>
          <p class="leading-relaxed">
            &ldquo;Rancang Bangun Aplikasi Pelacak Keuangan (Finance Tracker) menggunakan Nuxt.js &amp; Supabase dengan Dynamic Trend Color Indicator untuk Mencegah Kebiasaan Latte Factor Mahasiswa.&rdquo;
          </p>
        </div>
      </div>
    </section>

    <!-- Pengalaman & Rekayasa -->
    <section class="space-y-6">
      <h2 class="text-xl sm:text-2xl font-display font-bold text-ink">
        Pengalaman &amp; Proyek
      </h2>

      <div class="space-y-6">
        <div
          v-for="(exp, idx) in experiences"
          :key="idx"
          class="panel p-6 space-y-3"
        >
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-rule pb-2">
            <h3 class="font-display font-bold text-base sm:text-lg text-ink" v-html="exp.role"></h3>
            <span class="text-xs font-mono text-muted shrink-0">
              {{ exp.period }} &bull; {{ exp.type }}
            </span>
          </div>

          <p class="text-sm sm:text-base font-body text-ink leading-relaxed">
            {{ exp.description }}
          </p>

          <div class="text-xs font-mono text-muted pt-1">
            Stack: {{ exp.stack }}
          </div>
        </div>
      </div>
    </section>

    <!-- Keahlian Teknis -->
    <section class="space-y-6">
      <h2 class="text-xl sm:text-2xl font-display font-bold text-ink">
        Keahlian Teknis
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="grp in skills"
          :key="grp.category"
          class="panel p-5 space-y-1.5"
        >
          <h3 class="font-display font-bold text-sm text-ink uppercase tracking-wider">
            {{ grp.category }}
          </h3>
          <p class="text-sm font-body text-muted leading-relaxed">
            {{ grp.items }}
          </p>
        </div>
      </div>
    </section>

    <!-- Dokumen CV / Resume -->
    <section class="panel p-6 sm:p-8 space-y-4 border-dashed">
      <div class="space-y-1">
        <h3 class="font-display font-bold text-lg text-ink">
          Curriculum Vitae (CV)
        </h3>
        <p class="text-sm font-body text-muted">
          Dokumen ringkasan lengkap untuk keperluan lamaran kerja dan rekruitmen.
        </p>
      </div>

      <div class="panel-dashed p-4 text-xs font-mono text-muted bg-paper">
        [Siapkan file CV dalam format PDF, tautkan tombol ini ke file /cv-andi-marsituru.pdf di folder public/]
      </div>

      <div class="pt-2">
        <a
          href="mailto:andimarsituru@gmail.com?subject=Permintaan%20CV%20Andi%20Marsituru"
          class="inline-flex items-center space-x-2 px-4 py-2 rounded bg-ink text-paper font-display text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          <span>Minta CV via Email</span>
          <Icon name="arrow-up-right" class="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  </div>
</template>
