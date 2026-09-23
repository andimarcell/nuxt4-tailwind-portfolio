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
  <ul class="space-y-1.5">
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        class="block py-0.5 transition-colors"
        :class="[
          level > 0 ? 'pl-3 text-muted/80 text-[11px]' : 'text-xs',
          activeId === link.id
            ? 'text-ink font-semibold'
            : 'text-muted hover:text-ink',
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
