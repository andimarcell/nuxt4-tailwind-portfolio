<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="mt-20 pt-8 pb-12 border-t border-rule font-body text-sm text-muted">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="space-y-1">
        <div class="font-display font-semibold text-ink text-base">
          Andi Marsituru Pakke
        </div>
        <p class="text-xs text-muted">
          Software engineer di Balikpapan &mdash; S1 Informatika Universitas Mulia (2026).
        </p>
      </div>

      <div class="flex items-center space-x-5 font-display text-xs">
        <a
          href="https://github.com/andimarcell"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-ink transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/andimarcell"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-ink transition-colors"
        >
          LinkedIn
        </a>
        <NuxtLink
          to="/about"
          class="hover:text-ink transition-colors"
        >
          Kontak
        </NuxtLink>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-rule/50 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-muted/80 gap-2">
      <div>
        &copy; {{ currentYear }} Andi Marsituru Pakke. Hak cipta dilindungi.
      </div>
      <div class="font-mono text-[11px]">
        Nuxt 4 &amp; Tailwind CSS v4
      </div>
    </div>
  </footer>
</template>
