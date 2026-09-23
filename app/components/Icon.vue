<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: "w-5 h-5",
  },
});
</script>

<template>
  <!-- Sun -->
  <svg
    v-if="name === 'sun'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>

  <!-- Moon -->
  <svg
    v-else-if="name === 'moon'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>

  <!-- Monitor / System -->
  <svg
    v-else-if="name === 'monitor'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>

  <!-- GitHub -->
  <svg
    v-else-if="name === 'github'"
    :class="class"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2Z"
    />
  </svg>

  <!-- LinkedIn -->
  <svg
    v-else-if="name === 'linkedin'"
    :class="class"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    />
  </svg>

  <!-- Mail -->
  <svg
    v-else-if="name === 'mail'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>

  <!-- External Link -->
  <svg
    v-else-if="name === 'external-link'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>

  <!-- Arrow Right -->
  <svg
    v-else-if="name === 'arrow-right'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>

  <!-- Arrow Left -->
  <svg
    v-else-if="name === 'arrow-left'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m12 19-7-7 7-7M19 12H5" />
  </svg>

  <!-- Arrow Up Right -->
  <svg
    v-else-if="name === 'arrow-up-right'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>

  <!-- Sparkles -->
  <svg
    v-else-if="name === 'sparkles'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
  </svg>

  <!-- Star -->
  <svg
    v-else-if="name === 'star'"
    :class="class"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>

  <!-- Calendar -->
  <svg
    v-else-if="name === 'calendar'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M8 2v4M16 2v4M3 10h18" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
  </svg>

  <!-- Clock -->
  <svg
    v-else-if="name === 'clock'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>

  <!-- Code / Terminal -->
  <svg
    v-else-if="name === 'code'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>

  <!-- Terminal -->
  <svg
    v-else-if="name === 'terminal'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>

  <!-- Layers / Stack -->
  <svg
    v-else-if="name === 'layers'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>

  <!-- Check -->
  <svg
    v-else-if="name === 'check'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>

  <!-- Check Circle -->
  <svg
    v-else-if="name === 'check-circle'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>

  <!-- Folder -->
  <svg
    v-else-if="name === 'folder'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  </svg>

  <!-- Search -->
  <svg
    v-else-if="name === 'search'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
  </svg>

  <!-- Menu (hamburger) -->
  <svg
    v-else-if="name === 'menu'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>

  <!-- Close (x) -->
  <svg
    v-else-if="name === 'x'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>

  <!-- Zap / Bolt -->
  <svg
    v-else-if="name === 'zap'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>

  <!-- Copy -->
  <svg
    v-else-if="name === 'copy'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>

  <!-- Book Open -->
  <svg
    v-else-if="name === 'book-open'"
    :class="class"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>

  <!-- Default fallback dot -->
  <svg
    v-else
    :class="class"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="6" />
  </svg>
</template>

