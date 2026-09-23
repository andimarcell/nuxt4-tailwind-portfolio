<script setup>
definePageMeta({
  layout: "app",
});

const route = useRoute();
const activeId = ref(null);

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});

useHead({
  title: () => page.value?.title || "Tulisan",
});

useSeoMeta({
  title: () => page.value?.title || "Tulisan",
  description: () => page.value?.description,
  ogTitle: () => page.value?.title,
  ogDescription: () => page.value?.description,
});

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

  setTimeout(() => {
    const headings = document.querySelectorAll("article h2, article h3");
    headings.forEach((h) => observer.observe(h));
  }, 300);

  onBeforeUnmount(() => {
    const headings = document.querySelectorAll("article h2, article h3");
    headings.forEach((h) => observer.unobserve(h));
  });
});
</script>

<template>
  <div class="space-y-8">
    <!-- Back Navigation -->
    <div>
      <NuxtLink
        to="/blog"
        class="inline-flex items-center space-x-1 text-xs font-display font-semibold text-muted hover:text-ink transition-colors"
      >
        <span>&larr;</span>
        <span>Kembali ke Tulisan</span>
      </NuxtLink>
    </div>

    <!-- Article Detail -->
    <template v-if="page">
      <!-- Article Header -->
      <header class="space-y-3 pb-6 border-b border-rule">
        <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
          <span v-if="page.publishedAt">
            {{
              new Date(page.publishedAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </span>
          <span v-if="page.category">&bull; {{ page.category }}</span>
          <span>&bull; Andi Marsituru Pakke</span>
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tight leading-[1.2]">
          {{ page.title }}
        </h1>

        <p v-if="page.description" class="text-base sm:text-lg text-muted font-body leading-relaxed">
          {{ page.description }}
        </p>
      </header>

      <!-- Grid: Content + TOC -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Content -->
        <div
          class="lg:col-span-8"
          :class="{ 'lg:col-span-12': !page.body?.toc?.links?.length }"
        >
          <article class="prose prose-neutral dark:prose-invert max-w-none font-body text-ink prose-headings:font-display prose-headings:tracking-tight prose-a:text-ink prose-a:underline prose-code:font-mono prose-pre:bg-paper prose-pre:border prose-pre:border-rule prose-pre:text-ink">
            <ContentRenderer :value="page" />
          </article>

          <div class="mt-12 pt-6 border-t border-rule flex items-center justify-between text-xs font-display">
            <NuxtLink to="/blog" class="text-ink font-semibold underline">
              &larr; Daftar Tulisan
            </NuxtLink>
            <a href="#top" class="text-muted hover:text-ink">
              Kembali ke Atas &uarr;
            </a>
          </div>
        </div>

        <!-- Sidebar TOC -->
        <aside
          v-if="page.body?.toc?.links?.length"
          class="hidden lg:block lg:col-span-4 sticky top-12 space-y-3 border-l border-rule pl-5"
        >
          <div class="text-xs font-display font-bold uppercase tracking-wider text-muted">
            Daftar Isi
          </div>
          <nav class="max-h-[70vh] overflow-y-auto text-xs font-body">
            <TocLink :links="page.body.toc.links" :active-id="activeId" />
          </nav>
        </aside>
      </div>
    </template>

    <!-- 404 -->
    <div v-else class="panel p-8 text-center space-y-3">
      <h2 class="text-xl font-display font-bold text-ink">
        Tulisan Tidak Ditemukan
      </h2>
      <p class="text-sm font-body text-muted">
        Maaf, artikel yang Anda cari tidak tersedia.
      </p>
      <NuxtLink to="/blog" class="inline-block text-xs font-display font-semibold text-ink underline">
        Kembali ke Daftar Tulisan
      </NuxtLink>
    </div>
  </div>
</template>
