<script setup>
const route = useRoute();
defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  level: {
    type: Number,
    default: 0,
  },
  activeId: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <ul class="space-y-1.5 text-xs">
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        class="block py-1 transition-all duration-200"
        :class="[
          level > 0 ? 'pl-4 text-slate-500 dark:text-slate-400' : 'text-slate-600 dark:text-slate-300',
          activeId === link.id
            ? 'text-indigo-600 dark:text-indigo-400 font-semibold translate-x-1'
            : 'hover:text-indigo-500 dark:hover:text-indigo-300',
        ]"
      >
        <span class="line-clamp-1">{{ link.text }}</span>
      </NuxtLink>
      <TocLink
        v-if="link.children && link.children.length"
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
        class="mt-1"
      />
    </li>
  </ul>
</template>
