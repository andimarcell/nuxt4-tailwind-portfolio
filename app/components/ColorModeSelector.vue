<script setup>
const colorMode = useColorMode();

const modes = [
  { id: 'light', label: 'Light', icon: 'sun' },
  { id: 'dark', label: 'Dark', icon: 'moon' },
  { id: 'system', label: 'System', icon: 'monitor' }
];

function cycleMode() {
  const currentIndex = modes.findIndex(m => m.id === colorMode.preference);
  const nextIndex = (currentIndex + 1) % modes.length;
  colorMode.preference = modes[nextIndex].id;
}

const currentMode = computed(() => {
  return modes.find(m => m.id === colorMode.preference) || modes[0];
});

const isDark = computed(() => colorMode.value === 'dark');
</script>

<template>
  <button
    type="button"
    @click="cycleMode"
    class="relative inline-flex items-center justify-center p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 group"
    :title="`Theme: ${currentMode.label} (Click to switch)`"
    aria-label="Toggle Color Theme"
  >
    <span class="sr-only">Toggle theme</span>
    
    <!-- Sun Icon for Light -->
    <Icon
      v-if="colorMode.preference === 'light'"
      name="sun"
      class="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-0 group-hover:rotate-45"
    />

    <!-- Moon Icon for Dark -->
    <Icon
      v-else-if="colorMode.preference === 'dark'"
      name="moon"
      class="w-4 h-4 text-indigo-400 transition-transform duration-300 -rotate-12 group-hover:rotate-0"
    />

    <!-- Monitor Icon for System -->
    <Icon
      v-else
      name="monitor"
      class="w-4 h-4 text-cyan-500 transition-transform duration-300 group-hover:scale-110"
    />

    <!-- Indicator dot showing current actual theme -->
    <span
      class="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
      :class="isDark ? 'bg-indigo-400 shadow-xs shadow-indigo-400' : 'bg-amber-400 shadow-xs shadow-amber-400'"
    ></span>
  </button>
</template>