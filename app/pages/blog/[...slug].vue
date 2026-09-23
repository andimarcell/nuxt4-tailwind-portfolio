<script setup>
definePageMeta({
  layout: "app",
});

const route = useRoute();
const activeId = ref(null);

// Tarik data spesifik menggunakan koleksi 'blog'
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});

useHead({
  title: () => page.value?.title || "Blog",
});

useSeoMeta({
  title: () => page.value?.title || "Blog",
  description: () => page.value?.description,
  ogTitle: () => page.value?.title,
  ogDescription: () => page.value?.description,
  twitterTitle: () => page.value?.title,
  twitterDescription: () => page.value?.description,
});

// Setup scrollspy observer for headings
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
        }
      }
    },
    { threshold: 0.3, rootMargin: "0px 0px -40% 0px" }
  );

  const observeHeadings = () => {
    const headings = document.querySelectorAll("article h2, article h3");
    headings.forEach((h) => observer.observe(h));
  };

  setTimeout(observeHeadings, 300);

  onBeforeUnmount(() => {
    const headings = document.querySelectorAll("article h2, article h3");
    headings.forEach((h) => observer.unobserve(h));
  });
});
</script>

<template>
  <div class="space-y-8">
    <!-- Back to blog navigation -->
    <div>
      <NuxtLink
        to="/blog"
        class="inline-flex items-center space-x-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1.5 transition-colors group"
      >
        <Icon name="arrow-left" class="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
        <span>Kembali ke Semua Artikel</span>
      </NuxtLink>
    </div>

    <!-- Article Content -->
    <template v-if="page">
      <!-- Article Header -->
      <header class="space-y-4 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
        <!-- Metadata pills -->
        <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span
            v-if="page.publishedAt"
            class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            <Icon name="calendar" class="w-3.5 h-3.5 text-indigo-500" />
            <time :datetime="page.publishedAt">
              {{
                new Date(page.publishedAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </time>
          </span>

          <span
            v-if="page.category"
            class="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50"
          >
            {{ page.category }}
          </span>

          <span class="flex items-center space-x-1">
            <Icon name="user" class="w-3.5 h-3.5 text-slate-400" />
            <span>Andi Marsituru Pakke</span>
          </span>
        </div>

        <!-- Headline Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
          {{ page.title }}
        </h1>

        <!-- Subtitle -->
        <p v-if="page.description" class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {{ page.description }}
        </p>
      </header>

      <!-- Main Layout: Content + TOC -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <!-- Content Column -->
        <div
          class="lg:col-span-8"
          :class="{ 'lg:col-span-12': !page.body?.toc?.links?.length }"
        >
          <article class="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-img:rounded-2xl prose-img:shadow-md prose-pre:rounded-2xl prose-pre:border prose-pre:border-slate-800">
            <ContentRenderer :value="page" />
          </article>

          <!-- Bottom Article Footer -->
          <div class="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <NuxtLink
              to="/blog"
              class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl glass-panel text-sm font-medium hover:border-indigo-400/50 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Icon name="arrow-left" class="w-4 h-4" />
              <span>Daftar Artikel</span>
            </NuxtLink>

            <a
              href="#top"
              class="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span>Kembali ke Atas</span>
              <Icon name="arrow-up-right" class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- Sticky Table of Contents Column -->
        <aside
          v-if="page.body?.toc?.links?.length"
          class="hidden lg:block lg:col-span-4 sticky top-24 space-y-4"
        >
          <div class="glass-panel rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div class="flex items-center space-x-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              <Icon name="layers" class="w-3.5 h-3.5 text-indigo-500" />
              <span>Daftar Isi</span>
            </div>
            <nav class="max-h-[70vh] overflow-y-auto pr-2">
              <TocLink :links="page.body.toc.links" :active-id="activeId" />
            </nav>
          </div>
        </aside>
      </div>
    </template>

    <!-- Error State 404 -->
    <div v-else class="text-center py-20 space-y-4">
      <div class="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto text-2xl font-bold">
        404
      </div>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
        Artikel Tidak Ditemukan
      </h2>
      <p class="text-sm text-slate-500 max-w-sm mx-auto">
        Maaf, artikel yang Anda tuju mungkin telah dipindahkan atau belum tersedia.
      </p>
      <NuxtLink
        to="/blog"
        class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
      >
        <span>Lihat Semua Artikel</span>
        <Icon name="arrow-right" class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>
