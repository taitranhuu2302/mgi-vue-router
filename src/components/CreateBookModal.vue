<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch } from 'vue'
import { BookType } from '@/types/Book'
import { LIST_AUTHOR } from '@/constant/Author'
import { convertToSlug, guidGenerator } from '@/utils'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['update:open'])
const book = reactive<BookType>({
  author: '',
  date: '',
  id: '',
  price: 0,
  slug: '',
  title: '',
  image: ''
})

watch(book, () => {
  book.slug = convertToSlug(book.title)
})

const handleCreateBook = () => {
  const newBook: BookType = {
    ...book,
    date: new Date().toDateString(),
    id: guidGenerator()
  }
  console.log(newBook)
}
</script>

<template>
  <div class="relative z-10" :class="{ hidden: !props.open }" id="modal-blog">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-2.5">
            <h3 class="text-xl text-center">Create Book</h3>
            <div>
              <label for="title">Title</label>
              <input v-model="book.title" type="text" name="title" id="title" />
            </div>
            <div>
              <label for="price">Price</label>
              <input v-model="book.price" type="number" name="price" id="price" />
            </div>
            <div>
              <label for="author">Author</label>
              <select v-model="book.author" name="author" id="author">
                <option value="">SELECT</option>
                <template v-for="author in LIST_AUTHOR" :key="author.id">
                  <option :value="author.id">{{ author.name }}</option>
                </template>
              </select>
            </div>
            <div>
              <label for="slug">Slug</label>
              <input :value="book.slug" type="text" readonly name="slug" id="slug" />
            </div>
            <div>
              <label for="image">Image Link</label>
              <input v-model="book.image" type="text" name="image" id="image" />
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              @click="handleCreateBook"
              type="button"
              class="btn bg-blue-600 text-white hover:bg-opacity-90"
            >
              Save
            </button>
            <button
              type="button"
              class="btn bg-white text-gray-900"
              @click="emit('update:open', false)"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply py-2 px-4 rounded;
}

#modal-blog input,
select {
  @apply h-10 border mt-1 rounded px-4 w-full bg-gray-50 outline-none;
}
</style>
