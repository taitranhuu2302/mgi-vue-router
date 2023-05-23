<script setup lang="ts">

import SidebarComponent from "@/components/SidebarComponent.vue";
</script>

<template>
  <div class="mx-auto container mt-5 flex gap-5">
    <div class="flex-grow">
      <slot></slot>
    </div>
    <SidebarComponent/>
  </div>
</template>

<style scoped>

</style>