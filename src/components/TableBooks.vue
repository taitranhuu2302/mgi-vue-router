<script setup lang="ts">
import { getAuthorName, onErrorImage } from '@/utils'
import { BookType } from '@/types/Book'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  listBook: BookType[]
}>()
const emit = defineEmits(['onDeleteBook'])
</script>

<template>
  <div
    class="shadow-md max-h-[556px] min-w-[800px] overflow-auto border-b border-gray-200 rounded-lg"
  >
    <table id="table" class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Author</th>
          <th scope="col">Price</th>
          <th scope="col">Created Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <template v-for="book in props.listBook" :key="book.id">
          <tr>
            <td class="w-[5%]">
              <div class="table-text">{{ book.id }}</div>
            </td>
            <td class="w-[15%]">
              <div class="table-text">
                <router-link :to="{ name: 'book-detail', params: { slug: book.slug } }">
                  {{ book.title }}
                </router-link>
              </div>
            </td>
            <td class="w-[10%]">
              <div class="table-text">
                <img
                  class="w-[70px] rounded h-[70px]"
                  :src="book.image"
                  alt=""
                  @error="onErrorImage"
                />
              </div>
            </td>
            <td class="w-[20%]">
              <div class="table-text">
                <router-link :to="{ name: 'author-detail', params: { id: book.author } }">
                  {{ getAuthorName(book.author) }}
                </router-link>
              </div>
            </td>
            <td class="w-[20%]">
              <div class="table-text">${{ book.price }}</div>
            </td>
            <td class="w-[15%]">
              <div class="table-text">{{ book.date }}</div>
            </td>
            <td class="w-[15%]">
              <div class="flex items-center gap-4">
                <router-link
                  :to="{ name: 'book-detail', params: { slug: book.slug } }"
                  class="text-blue-500"
                >
                  <i class="fas fa-info-square text-lg"></i>
                </router-link>
                <button class="text-red-500" @click="emit('onDeleteBook', book.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#table tr th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider;
}

#table tr td {
  @apply px-6 py-4;
}

.table-text {
  @apply line-clamp-1;
}
</style>
