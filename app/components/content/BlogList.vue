<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});

const searchQuery = ref("");

const { data } = await useAsyncData("blog-list", () => {
  const query = queryCollection("blog")
    .select("path", "title", "description", "publishedAt")
    .where("path", "!=", "/blog")
    .order("publishedAt", "DESC");
  if (props.limit) {
    query.limit(props.limit);
  }
  return query.all();
});

const filteredPosts = computed(() => {
  if (!data.value) return [];
  if (!searchQuery.value.trim()) return data.value;

  const q = searchQuery.value.toLowerCase();
  return data.value.filter(
    (post) =>
      post.title?.toLowerCase().includes(q) ||
      post.description?.toLowerCase().includes(q)
  );
});

// Group posts by year
const postsByYear = computed(() => {
  const groups = {};
  for (const post of filteredPosts.value) {
    const year = post.publishedAt
      ? new Date(post.publishedAt).getFullYear()
      : "Archive";
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(post);
  }
  return groups;
});

const years = computed(() => {
  return Object.keys(postsByYear.value).sort((a, b) => b - a);
});
</script>

<template>
  <div class="not-prose space-y-8">
    <!-- Search Bar (only show if not limited to recent items) -->
    <div v-if="!limit" class="relative max-w-md">
      <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
        <Icon name="search" class="w-4 h-4" />
      </div>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Cari artikel atau topik..."
        class="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
      />
      <button
        v-if="searchQuery"
        @click="searchQuery = ''"
        class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
      >
        Reset
      </button>
    </div>

    <!-- Empty Results State -->
    <div
      v-if="!years.length"
      class="glass-panel p-8 rounded-2xl text-center space-y-2 text-slate-500 dark:text-slate-400"
    >
      <Icon name="book-open" class="w-8 h-8 mx-auto text-slate-400 dark:text-slate-600 mb-2" />
      <p class="font-medium">Tidak ada artikel yang cocok dengan pencarian.</p>
      <p class="text-xs">Coba kata kunci lain seperti "FTracker", "AEGIS", atau "Vue".</p>
    </div>

    <!-- Grouped Articles by Year -->
    <div v-for="year in years" :key="year" class="space-y-4">
      <div class="flex items-center space-x-3">
        <span class="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-lg border border-indigo-200/50 dark:border-indigo-900/50">
          {{ year }}
        </span>
        <div class="flex-1 h-px bg-slate-200/80 dark:border-slate-800/80"></div>
      </div>

      <div class="grid grid-cols-1 gap-3">
        <NuxtLink
          v-for="post in postsByYear[year]"
          :key="post.path"
          :to="post.path"
          class="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
        >
          <div class="space-y-1.5 flex-1">
            <div class="flex items-center space-x-3 text-xs font-mono text-slate-400 dark:text-slate-500">
              <span v-if="post.publishedAt">
                {{
                  new Date(post.publishedAt).toLocaleDateString("id-ID", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              </span>
            </div>

            <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ post.title }}
            </h3>

            <p v-if="post.description" class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {{ post.description }}
            </p>
          </div>

          <div class="flex items-center space-x-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform self-end sm:self-center shrink-0">
            <span>Baca</span>
            <Icon name="arrow-right" class="w-4 h-4" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
