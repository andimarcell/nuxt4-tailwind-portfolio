<script setup>
const fallbackRepos = [
  {
    name: "ftracker-nuxt",
    html_url: "https://github.com/andimarcell",
    description: "Aplikasi Pelacak Keuangan (Finance Tracker) modern berbasis Nuxt 4, Supabase RLS, dan CapacitorJS dengan Dynamic Trend Color Indicator.",
    stargazers_count: 5,
    language: "Vue",
  },
  {
    name: "aegis-monitoring-listrik-fuzzy",
    html_url: "https://github.com/andimarcell/aegis-monitoring-listrik-fuzzy",
    description: "Sistem monitoring daya listrik rumah pintar (Smart Home) berbasis IoT dengan Fuzzy Logic Engine, MQTT, dan Firebase Cloud.",
    stargazers_count: 4,
    language: "Python",
  },
  {
    name: "nuxt-portofolio",
    html_url: "https://github.com/andimarcell",
    description: "Modern developer portfolio & technical blog built with Nuxt 4, Nuxt Content, and Tailwind CSS v4.",
    stargazers_count: 3,
    language: "TypeScript",
  },
];

const { error, pending, data } = await useFetch(
  "https://api.github.com/users/andimarcell/repos",
  {
    lazy: true,
  }
);

const repos = computed(() => {
  if (data.value && Array.isArray(data.value) && data.value.length > 0) {
    const valid = data.value.filter((r) => r.description);
    if (valid.length > 0) {
      return valid.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
  }
  return fallbackRepos;
});
</script>

<template>
  <div class="not-prose space-y-4">
    <!-- Loading State Skeleton -->
    <div v-if="pending && !repos.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div v-for="i in 4" :key="i" class="panel p-5 animate-pulse space-y-2.5">
        <div class="h-4 bg-rule/50 rounded w-1/2"></div>
        <div class="h-3 bg-rule/50 rounded w-full"></div>
      </div>
    </div>

    <!-- Repository Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a
        v-for="(repo, index) in repos"
        :key="index"
        :href="repo.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="panel p-5 flex flex-col justify-between hover:border-ink transition-colors group space-y-3"
      >
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <h3 class="font-display font-bold text-sm text-ink group-hover:underline">
              {{ repo.name }}
            </h3>
            <span class="text-xs font-mono text-muted">
              {{ repo.stargazers_count }} &starf;
            </span>
          </div>
          <p class="text-xs text-muted font-body leading-relaxed line-clamp-2">
            {{ repo.description }}
          </p>
        </div>

        <div class="pt-2 border-t border-rule/50 flex items-center justify-between text-xs font-mono text-muted">
          <span>{{ repo.language || "Code" }}</span>
          <span class="group-hover:text-ink flex items-center space-x-1">
            <span>Buka repo</span>
            <Icon name="arrow-up-right" class="w-3 h-3" />
          </span>
        </div>
      </a>
    </div>
  </div>
</template>
