<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch, ref } from 'vue'
import { BookType } from '@/types/Book'
import { LIST_AUTHOR } from '@/constant/Author'
import { convertToSlug, guidGenerator } from '@/utils'
import { useBookStore } from '@/stores/useBookStore'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['update:open'])
const bookStore = useBookStore()
const book = reactive<BookType>({
  author: 0,
  date: '',
  id: '',
  price: 0,
  slug: '',
  title: '',
  image: ''
})
const messageError = ref<string>('')

watch(book, () => {
  book.slug = convertToSlug(book.title)
})

const handleCreateBook = () => {
  const newBook: BookType = {
    ...book,
    date: new Date().toDateString(),
    id: guidGenerator(),
    slug: `${book.slug}-${new Date().getTime()}`
  }
  if (!newBook.title || !newBook.author || !newBook.price) {
    messageError.value = 'Please enter the full field'
    return
  }
  bookStore.addNewBook(newBook)
  onClose()
}

const onClose = () => {
  emit('update:open', false)
  clearData()
}

const clearData = () => {
  book.id = ''
  book.title = ''
  book.image = ''
  book.price = 0
  book.slug = ''
  book.date = ''
  book.author = 0
  messageError.value = ''
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
              <input v-model.trim="book.title" type="text" name="title" id="title" />
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
              <input v-model.trim="book.image" type="text" name="image" id="image" />
            </div>
          </div>
          <p v-if="!!messageError" class="text-red-600 text-center">{{ messageError }}</p>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              @click="handleCreateBook"
              type="button"
              class="btn bg-blue-600 text-white hover:bg-opacity-90"
            >
              Save
            </button>
            <button type="button" class="btn bg-white text-gray-900" @click="onClose">
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