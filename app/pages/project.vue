<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Proyek",
});

useSeoMeta({
  title: "Proyek & Studi Kasus - Andi Marsituru Pakke",
  description: "Studi kasus teknis FTracker dan AEGIS: masalah, keputusan arsitektur, hasil terukur, dan repositori open source.",
});
</script>

<template>
  <div class="space-y-12 sm:space-y-16">
    <!-- Header -->
    <section class="space-y-2 border-b border-rule pb-6">
      <h1 class="text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tight">
        Proyek &amp; Studi Kasus
      </h1>
      <p class="text-base sm:text-lg text-muted font-body leading-relaxed max-w-2xl">
        Masalah nyata, keputusan teknis yang diambil, dan hasil terukur dari sistem yang saya rancang dan operasikan.
      </p>
    </section>

    <!-- Case Studies -->
    <section class="space-y-10">
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

    <!-- Additional GitHub Repositories -->
    <section class="space-y-6 pt-6 border-t border-rule">
      <div class="space-y-1">
        <h2 class="text-xl sm:text-2xl font-display font-bold text-ink">
          Repositori Lainnya di GitHub
        </h2>
        <p class="text-sm text-muted font-body">
          Eksplorasi kode dan modul yang tersimpan di akun GitHub publik.
        </p>
      </div>

      <projectList />
    </section>
  </div>
</template>
