<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Tulisan",
});

useSeoMeta({
  title: "Tulisan & Catatan Rekayasa - Andi Marsituru Pakke",
  description: "Dokumentasi keputusan teknis, arsitektur data, dan catatan studi oleh Andi Marsituru Pakke.",
});
</script>

<template>
  <div class="space-y-10">
    <section class="space-y-2 border-b border-rule pb-6">
      <h1 class="text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tight">
        Tulisan &amp; Catatan Teknis
      </h1>
      <p class="text-base sm:text-lg text-muted font-body leading-relaxed max-w-2xl">
        Dokumentasi keputusan teknis, arsitektur data, dan catatan studi rekayasa perangkat lunak.
      </p>
    </section>

    <section>
      <BlogList />
    </section>
  </div>
</template>