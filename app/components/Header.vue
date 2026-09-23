<script setup>
const route = useRoute();
const isMobileMenuOpen = ref(false);

const navItems = [
  { label: "Proyek", path: "/project" },
  { label: "Tulisan", path: "/blog" },
  { label: "Tentang", path: "/about" },
];

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false;
  }
);
</script>

<template>
  <header class="py-5 border-b border-rule mb-8">
    <div class="flex items-center justify-between">
      <!-- Site Brand / Full Name -->
      <NuxtLink to="/" class="font-display font-bold text-lg sm:text-xl tracking-tight text-ink hover:opacity-80 transition-opacity">
        Andi Marsituru Pakke
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="flex items-center space-x-6">
        <nav class="hidden sm:flex items-center space-x-5 font-display text-sm">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="transition-colors hover:text-ink pb-0.5"
            :class="route.path.startsWith(item.path) ? 'text-ink font-semibold border-b-2 border-ink' : 'text-muted'"
          >
            {{ item.label }}
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="text-muted hover:text-ink transition-colors pb-0.5"
          >
            CV
          </NuxtLink>
        </nav>

        <!-- Theme Toggle -->
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>

        <!-- Mobile Menu Toggle -->
        <button
          type="button"
          @click="toggleMobileMenu"
          class="sm:hidden p-1 text-muted hover:text-ink focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <Icon :name="isMobileMenuOpen ? 'x' : 'menu'" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div v-if="isMobileMenuOpen" class="sm:hidden pt-4 pb-2 space-y-2 font-display text-sm border-t border-rule mt-3">
      <NuxtLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="block py-1.5 transition-colors"
        :class="route.path.startsWith(item.path) ? 'text-ink font-bold' : 'text-muted'"
      >
        {{ item.label }}
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="block py-1.5 text-muted hover:text-ink transition-colors"
      >
        CV
      </NuxtLink>
    </div>
  </header>
</template>
