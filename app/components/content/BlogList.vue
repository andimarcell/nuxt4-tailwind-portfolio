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
      : "Arsip";
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
    <!-- Search Bar -->
    <div v-if="!limit" class="relative max-w-sm">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Cari tulisan atau topik..."
        class="w-full px-3.5 py-2 rounded panel text-sm font-body text-ink placeholder-muted focus:outline-none focus:border-ink transition-colors bg-paper"
      />
    </div>

    <!-- Empty Results -->
    <div v-if="!years.length" class="panel p-6 text-center text-sm font-body text-muted">
      Tidak ada artikel yang cocok dengan pencarian &ldquo;{{ searchQuery }}&rdquo;.
    </div>

    <!-- Posts grouped by year -->
    <div v-for="year in years" :key="year" class="space-y-3">
      <div class="text-xs font-mono font-bold text-muted border-b border-rule pb-1">
        {{ year }}
      </div>

      <div class="divide-y divide-rule/60">
        <NuxtLink
          v-for="post in postsByYear[year]"
          :key="post.path"
          :to="post.path"
          class="py-3.5 block hover:opacity-80 transition-opacity group space-y-1"
        >
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 class="font-display font-bold text-base text-ink group-hover:underline">
              {{ post.title }}
            </h3>
            <span v-if="post.publishedAt" class="text-xs font-mono text-muted shrink-0">
              {{
                new Date(post.publishedAt).toLocaleDateString("id-ID", {
                  month: "short",
                  day: "numeric",
                })
              }}
            </span>
          </div>

          <p v-if="post.description" class="text-sm font-body text-muted line-clamp-2">
            {{ post.description }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
