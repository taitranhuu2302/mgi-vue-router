<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CreateBookModal from '@/components/CreateBookModal.vue'
import { ref } from 'vue'
import TableBooks from '@/components/TableBooks.vue'
import { useBookStore } from '@/stores/useBookStore'

const openCreateBookModal = ref<boolean>(false)
const bookStore = useBookStore()
</script>

<template>
  <MainLayout>
    <div class="flex justify-end mb-5">
      <button
        @click="openCreateBookModal = true"
        class="p-2 bg-tertiary hover:bg-opacity-90 text-white rounded"
      >
        Create new book
      </button>
    </div>
    <TableBooks :books="bookStore.books" />
  </MainLayout>
  <CreateBookModal v-model:open="openCreateBookModal" />
</template>

<style scoped></style>