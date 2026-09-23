<script setup>
definePageMeta({
  layout: "app",
});

const { data: page } = await useAsyncData("blog-index", () => {
  return queryCollection("blog").path("/blog").first();
});

useSeoMeta({
  title: "Blog & Jurnal Rekayasa - Andi Marcell",
  description:
    "Kumpulan tulisan dan analisis teknis seputar Nuxt, Vue, Supabase, IoT, dan best practice software engineering oleh Andi Marsituru Pakke.",
  ogTitle: "Blog & Jurnal Rekayasa - Andi Marcell",
  ogDescription:
    "Kumpulan tulisan dan analisis teknis seputar Nuxt, Vue, Supabase, IoT, dan best practice software engineering oleh Andi Marsituru Pakke.",
});
</script>

<template>
  <div class="space-y-10 sm:space-y-12">
    <!-- Header -->
    <section class="space-y-4 max-w-2xl">
      <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-medium border border-indigo-200/60 dark:border-indigo-800/60">
        <Icon name="book-open" class="w-3.5 h-3.5" />
        <span>Jurnal &amp; Catatan Teknis</span>
      </div>

      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Tulisan, Analisis, &amp; Rekayasa
      </h1>

      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        Dokumentasi perjalanan saya dalam merancang sistem web modern, mengatasi kendala arsitektur data, dan merangkai solusi komputasi cerdas.
      </p>
    </section>

    <!-- Content & Articles List -->
    <section>
      <BlogList />
    </section>
  </div>
</template>