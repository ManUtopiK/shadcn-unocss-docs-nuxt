<template>
  <UiCard class="overflow-hidden [&:not(:first-child)]:mt-5 divide-y">
    <div
      v-for="(slot, i) in $slots.default?.() ?? []"
      :key="i"
    >
      <component :is="slot" :in-stack="true" />
    </div>
  </UiCard>
</template>
