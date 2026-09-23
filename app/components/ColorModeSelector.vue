<script setup>
const colorMode = useColorMode();

const modes = [
  { id: 'light', label: 'Terang', icon: 'sun' },
  { id: 'dark', label: 'Gelap', icon: 'moon' },
  { id: 'system', label: 'Sistem', icon: 'monitor' }
];

function cycleMode() {
  const currentIndex = modes.findIndex(m => m.id === colorMode.preference);
  const nextIndex = (currentIndex + 1) % modes.length;
  colorMode.preference = modes[nextIndex].id;
}

const currentMode = computed(() => {
  return modes.find(m => m.id === colorMode.preference) || modes[0];
});
</script>

<template>
  <button
    type="button"
    @click="cycleMode"
    class="p-1.5 rounded text-muted hover:text-ink transition-colors border border-rule focus:outline-none flex items-center space-x-1.5 text-xs font-mono"
    :title="`Tema: ${currentMode.label}`"
    aria-label="Ganti tema warna"
  >
    <Icon
      v-if="colorMode.preference === 'light'"
      name="sun"
      class="w-3.5 h-3.5"
    />
    <Icon
      v-else-if="colorMode.preference === 'dark'"
      name="moon"
      class="w-3.5 h-3.5"
    />
    <Icon
      v-else
      name="monitor"
      class="w-3.5 h-3.5"
    />
  </button>
</template>