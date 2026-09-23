<script setup>
const props = defineProps({
  limit: { type: Number, default: 3 },
});

const { data: posts } = await useAsyncData(`latest-posts-${props.limit}`, () => {
  return queryCollection("blog")
    .select("path", "title", "description", "publishedAt")
    .where("path", "!=", "/blog")
    .order("publishedAt", "DESC")
    .limit(props.limit)
    .all();
});
</script>

<template>
  <div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <NuxtLink
      v-for="post in posts"
      :key="post.path"
      :to="post.path"
      class="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <div class="space-y-2">
        <div v-if="post.publishedAt" class="text-xs font-mono text-slate-400 dark:text-slate-500">
          {{
            new Date(post.publishedAt).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
        </div>
        <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {{ post.title }}
        </h3>
        <p v-if="post.description" class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {{ post.description }}
        </p>
      </div>

      <div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
        <span>Baca Artikel</span>
        <Icon name="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </NuxtLink>
  </div>
</template>
