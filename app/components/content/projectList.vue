<script setup>
// Fallback curated repositories in case GitHub API rate-limits unauthenticated requests
const fallbackRepos = [
  {
    name: "ftracker-nuxt",
    html_url: "https://github.com/andimarcell",
    description: "Aplikasi Pelacak Keuangan (Finance Tracker) modern berbasis Nuxt 4, Supabase RLS, dan CapacitorJS dengan Dynamic Trend Color Indicator.",
    stargazers_count: 5,
    language: "Vue",
    topics: ["nuxt4", "supabase", "capacitor", "finance-tracker"],
  },
  {
    name: "aegis-monitoring-listrik-fuzzy",
    html_url: "https://github.com/andimarcell/aegis-monitoring-listrik-fuzzy",
    description: "Sistem monitoring daya listrik rumah pintar (Smart Home) berbasis IoT dengan Fuzzy Logic Engine, MQTT, dan Firebase Cloud.",
    stargazers_count: 4,
    language: "Python",
    topics: ["iot", "fuzzy-logic", "mqtt", "firebase"],
  },
  {
    name: "nuxt-portofolio",
    html_url: "https://github.com/andimarcell",
    description: "Modern developer portfolio & technical blog built with Nuxt 4, Nuxt Content, and Tailwind CSS v4.",
    stargazers_count: 3,
    language: "TypeScript",
    topics: ["nuxt", "vue", "tailwind", "portfolio"],
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

const getLanguageColor = (lang) => {
  const colors = {
    Vue: "bg-emerald-500",
    TypeScript: "bg-blue-500",
    JavaScript: "bg-amber-400",
    Python: "bg-yellow-500",
    HTML: "bg-orange-500",
    CSS: "bg-indigo-500",
  };
  return colors[lang] || "bg-slate-400";
};
</script>

<template>
  <div class="not-prose space-y-4">
    <!-- Loading State with Skeleton Shimmer -->
    <div v-if="pending && !repos.length" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="i in 4"
        :key="i"
        class="glass-panel p-5 rounded-2xl animate-pulse space-y-3"
      >
        <div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>
        <div class="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
        <div class="h-3 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
      </div>
    </div>

    <!-- Repository Cards Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a
        v-for="(repo, index) in repos"
        :key="index"
        :href="repo.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 group"
      >
        <div class="space-y-2.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <Icon name="folder" class="w-4 h-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
              <h3 class="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {{ repo.name }}
              </h3>
            </div>
            
            <div class="flex items-center space-x-1 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md">
              <Icon name="star" class="w-3.5 h-3.5 text-amber-500" />
              <span>{{ repo.stargazers_count }}</span>
            </div>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
            {{ repo.description }}
          </p>
        </div>

        <div class="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
          <div class="flex items-center space-x-1.5" v-if="repo.language">
            <span :class="['w-2 h-2 rounded-full', getLanguageColor(repo.language)]"></span>
            <span>{{ repo.language }}</span>
          </div>
          <div v-else class="text-[11px] text-slate-400">Repository</div>

          <div class="inline-flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 group-hover:underline">
            <span>View</span>
            <Icon name="external-link" class="w-3 h-3" />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
