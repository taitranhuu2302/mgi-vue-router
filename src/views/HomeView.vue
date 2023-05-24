<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CreateBookModal from '@/components/CreateBookModal.vue'
import { onMounted, ref } from 'vue'
import { BookType } from '@/types/Book'
import TableBooks from '@/components/TableBooks.vue'

const openCreateBookModal = ref<boolean>(false)
const listBook = ref<BookType[]>([])

onMounted(() => {
  listBook.value = localStorage.getItem('books')
    ? JSON.parse(localStorage.getItem('books') as string)
    : []
})

const addNewBook = (book: BookType) => {
  listBook.value = [book, ...listBook.value]
  updateDataLocal()
}

const updateDataLocal = () => {
  localStorage.setItem('books', JSON.stringify(listBook.value))
}

const onDeleteBook = (id: string) => {
  listBook.value = listBook.value.filter((item) => item.id !== id)
  updateDataLocal()
}
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
    <TableBooks :listBook="listBook" @onDeleteBook="onDeleteBook" />
  </MainLayout>
  <CreateBookModal v-model:open="openCreateBookModal" @addNewBook="addNewBook" />
</template>

<style scoped></style>
