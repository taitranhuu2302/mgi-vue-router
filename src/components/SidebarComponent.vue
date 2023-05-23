<script setup lang="ts">

import {LIST_AUTHOR} from "@/constant/Author";
</script>

<template>
  <aside class="p-6 w-60 shadow">
    <nav class="space-y-8 text-sm">
      <div class="space-y-3">
        <h2 class="text-sm font-semibold tracking-widest uppercase">Author</h2>
        <div class="flex flex-col space-y-2">
          <template v-for="author in LIST_AUTHOR" :key="author.id">
            <router-link :to="{name: 'author-detail', params: {id: author.id}}"
                         class="hover:text-blue-500 flex justify-between">
              {{ author.name }}
              <i class="far fa-long-arrow-right"></i>
            </router-link>
          </template>
        </div>
      </div>
    </nav>
  </aside>
</template>

<style scoped>

</style>