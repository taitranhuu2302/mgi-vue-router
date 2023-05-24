<script setup lang="ts">

import SidebarComponent from "@/components/SidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="mx-auto container mt-5 flex gap-5">
    <div class="flex-grow">
      <slot></slot>
    </div>
    <SidebarComponent/>
  </div>
</template>

<style scoped>

</style>