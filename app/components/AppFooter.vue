<script setup>
const currentYear = new Date().getFullYear();

// Display Balikpapan (UTC+8) time live
const balikpapanTime = ref("");

function updateTime() {
  try {
    balikpapanTime.value = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Makassar",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    balikpapanTime.value = "";
  }
}

onMounted(() => {
  updateTime();
  const timer = setInterval(updateTime, 1000);
  onBeforeUnmount(() => clearInterval(timer));
});
</script>

<template>
  <footer class="mt-20 mb-10">
    <div class="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
        <!-- Col 1: Bio / Branding -->
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <span class="font-bold text-slate-900 dark:text-white text-base">Andi Marsituru Pakke</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-mono font-medium border border-indigo-200/50 dark:border-indigo-800/50">
              S.Kom
            </span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
            Software Engineer specializing in modern frontend architecture, Nuxt 4, Supabase RLS, and reactive IoT telemetry.
          </p>
        </div>

        <!-- Col 2: Live Location & Local Time -->
        <div class="flex flex-col md:items-center space-y-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-slate-700 dark:text-slate-300 font-medium">Balikpapan, Indonesia</span>
          </div>
          <div v-if="balikpapanTime" class="text-slate-400 dark:text-slate-500">
            Local Time: <span class="text-slate-700 dark:text-slate-300">{{ balikpapanTime }} WITA</span>
          </div>
        </div>

        <!-- Col 3: Social Links -->
        <div class="flex md:justify-end items-center space-x-3">
          <a
            href="https://github.com/andimarcell"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 transition-all hover:scale-105"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Icon name="github" class="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/andimarcell"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-[#38bdf8] bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 transition-all hover:scale-105"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Icon name="linkedin" class="w-4 h-4" />
          </a>
          <NuxtLink
            to="/about"
            class="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 transition-all hover:scale-105"
            title="About & Contact"
            aria-label="About & Contact"
          >
            <Icon name="mail" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-3">
        <div>
          &copy; {{ currentYear }} Andi Marsituru Pakke. All rights reserved.
        </div>
        <div class="flex items-center space-x-1.5 font-mono text-[11px]">
          <span>Crafted with</span>
          <span class="text-rose-500">&hearts;</span>
          <span>using Nuxt 4 &amp; Tailwind CSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>

