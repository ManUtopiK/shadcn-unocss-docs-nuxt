<template>
  <CollapsibleContent v-bind="props" class="overflow-hidden transition-all data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
    <slot />
  </CollapsibleContent>
</template>

<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'radix-vue';

const props = defineProps<CollapsibleContentProps>();
</script>
