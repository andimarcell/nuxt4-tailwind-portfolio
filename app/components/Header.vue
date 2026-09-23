<script setup>
const route = useRoute();
const isMobileMenuOpen = ref(false);

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Project", path: "/project" },
  { label: "Blog", path: "/blog" },
];

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

// Close mobile menu on route change
watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false;
  }
);
</script>

<template>
  <header class="sticky top-4 z-50 mb-10">
    <div
      class="glass-panel rounded-2xl px-4 py-2.5 sm:px-6 flex items-center justify-between transition-all duration-300 shadow-md shadow-slate-200/50 dark:shadow-black/20"
    >
      <!-- Brand Logo / Monogram -->
      <NuxtLink to="/" class="flex items-center space-x-3 group">
        <div
          class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-sm shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300"
        >
          AP
        </div>
        <div class="flex flex-col">
          <div class="flex items-center space-x-2">
            <span
              class="font-bold text-slate-800 dark:text-slate-100 text-sm tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
            >
              Andi Marcell
            </span>
            <span class="relative flex h-2 w-2" title="Available for work">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
              ></span>
            </span>
          </div>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline-block">
            Software Engineer
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center space-x-1 font-medium text-sm">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-3.5 py-1.5 rounded-xl transition-all duration-200"
          :class="
            (item.path === '/' && route.path === '/') ||
            (item.path !== '/' && route.path.startsWith(item.path))
              ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 font-semibold'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
          "
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Actions: Theme Toggle & Mobile Menu Button -->
      <div class="flex items-center space-x-2">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <Icon :name="isMobileMenuOpen ? 'x' : 'menu'" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Navigation -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform -translate-y-2 opacity-0 scale-95"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-2 glass-panel rounded-2xl p-3 shadow-xl space-y-1"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
          :class="
            (item.path === '/' && route.path === '/') ||
            (item.path !== '/' && route.path.startsWith(item.path))
              ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 font-semibold'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          "
        >
          <span>{{ item.label }}</span>
          <Icon
            v-if="
              (item.path === '/' && route.path === '/') ||
              (item.path !== '/' && route.path.startsWith(item.path))
            "
            name="check"
            class="w-4 h-4 text-indigo-500"
          />
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>
