<script setup>
defineProps({
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  problem: { type: String, required: true },
  decisions: { type: Array, required: true },
  results: { type: String, required: true },
  resultsPlaceholder: { type: String, default: "" },
  techStack: { type: String, required: true },
  demoUrl: { type: String, default: "" },
  githubUrl: { type: String, default: "" },
  articleUrl: { type: String, default: "" },
  demoNote: { type: String, default: "" },
  image: { type: String, default: "" },
  imageCaption: { type: String, default: "" },
});
</script>

<template>
  <div class="panel p-6 sm:p-8 space-y-6">
    <!-- Header: Title & Tagline -->
    <div class="border-b border-rule pb-4">
      <h3 class="text-2xl sm:text-3xl font-display font-bold text-ink">
        {{ title }}
      </h3>
      <p class="text-base sm:text-lg text-muted font-body mt-1">
        {{ tagline }}
      </p>
    </div>

    <!-- Main Grid: Case Study Content & Screenshot/Preview -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
      <!-- Left / Details Column (7 cols on lg) -->
      <div class="lg:col-span-7 space-y-5">
        <!-- Problem -->
        <div class="space-y-1.5">
          <div class="text-xs font-display font-bold uppercase tracking-wider text-muted">
            Masalah
          </div>
          <p class="text-sm sm:text-base text-ink leading-relaxed">
            {{ problem }}
          </p>
        </div>

        <!-- Decisions -->
        <div class="space-y-2">
          <div class="text-xs font-display font-bold uppercase tracking-wider text-muted">
            Keputusan Teknis
          </div>
          <ul class="space-y-1.5 text-sm sm:text-base text-ink leading-relaxed list-disc list-inside">
            <li v-for="(item, idx) in decisions" :key="idx">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Results -->
        <div class="space-y-2">
          <div class="text-xs font-display font-bold uppercase tracking-wider text-muted">
            Hasil
          </div>
          <p class="text-sm sm:text-base text-ink leading-relaxed">
            {{ results }}
          </p>
          <div v-if="resultsPlaceholder" class="panel-dashed p-3 text-xs font-mono text-muted bg-paper/50">
            {{ resultsPlaceholder }}
          </div>
        </div>

        <!-- Single-sentence Tech Stack -->
        <div class="pt-2 text-xs sm:text-sm text-muted font-body italic border-t border-rule/60">
          {{ techStack }}
        </div>

        <!-- Action Links -->
        <div class="pt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-display font-semibold">
          <a
            v-if="demoUrl"
            :href="demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-ink underline hover:opacity-80 flex items-center space-x-1"
          >
            <span>Demo langsung</span>
            <Icon name="arrow-up-right" class="w-3.5 h-3.5" />
          </a>

          <a
            v-if="githubUrl"
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-ink underline hover:opacity-80 flex items-center space-x-1"
          >
            <span>Kode di GitHub</span>
            <Icon name="arrow-up-right" class="w-3.5 h-3.5" />
          </a>

          <NuxtLink
            v-if="articleUrl"
            :to="articleUrl"
            class="text-ink underline hover:opacity-80 flex items-center space-x-1"
          >
            <span>Baca tulisan lengkap</span>
            <Icon name="arrow-right" class="w-3.5 h-3.5" />
          </NuxtLink>

          <span v-if="demoNote" class="text-xs text-muted font-normal italic">
            {{ demoNote }}
          </span>
        </div>
      </div>

      <!-- Right Column: Visual Preview / Screenshot (5 cols on lg) -->
      <div class="lg:col-span-5 space-y-2">
        <div class="panel overflow-hidden bg-paper">
          <img
            v-if="image"
            :src="image"
            :alt="title"
            class="w-full h-auto object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
          <div v-else class="panel-dashed p-12 text-center text-xs font-mono text-muted">
            [Screenshot asli]
          </div>
        </div>
        <p v-if="imageCaption" class="text-[11px] font-mono text-muted text-center">
          {{ imageCaption }}
        </p>
      </div>
    </div>
  </div>
</template>

