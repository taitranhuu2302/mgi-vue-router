<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { onMounted, onUpdated, ref, watch } from 'vue'
import { BookType } from '@/types/Book'
import { useRouter } from 'vue-router'
import { AuthorType } from '@/types/Author'
import TableBooks from '@/components/TableBooks.vue'
import { useBookStore } from '@/stores/useBookStore'
import { useAuthorStore } from '@/stores/useAuthorStore'

const listBook = ref<BookType[]>([])
const router = useRouter()
const bookStore = useBookStore()
const authorStore = useAuthorStore()
const authorDetail = ref<AuthorType>({
  dob: '',
  firstName: '',
  id: 0,
  lastName: '',
  name: '',
  sex: 'Male'
})

onMounted(() => getData())
onUpdated(() => getData())

const getData = () => {
  const { id } = router.currentRoute.value.params
  listBook.value = bookStore.getBookByAuthor(Number(id))
  const author = authorStore.getAuthorById(Number(id))
  if (!author) {
    router.push('/error-page')
    return
  }
  authorDetail.value = author
}

watch(authorDetail, () => {
  authorDetail.value.name = `${authorDetail.value.firstName} ${authorDetail.value.lastName}`
})
</script>

<template>
  <MainLayout>
    <h2 class="text-3xl font-bold">Author</h2>
    <div class="grid grid-cols-12 my-5">
      <div class="col-span-2 my-auto">First Name:</div>
      <div class="col-span-10">
        <input type="text" v-model="authorDetail.firstName" />
      </div>
      <div class="col-span-2 my-auto">Last Name:</div>
      <div class="col-span-10">
        <input type="text" v-model="authorDetail.lastName" />
      </div>
      <div class="col-span-2 my-auto">Sex:</div>
      <div class="col-span-10">
        <input type="text" v-model="authorDetail.sex" />
      </div>
      <div class="col-span-2 my-auto">Date of birth:</div>
      <div class="col-span-10">
        <input type="date" v-model="authorDetail.dob" />
      </div>
      <div class="col-span-12 flex justify-end mt-5">
        <button class="bg-green-600 hover:bg-green-700 py-2 px-3 rounded text-white">Update</button>
      </div>
    </div>
    <TableBooks :books="listBook" />
  </MainLayout>
</template>

<style scoped>
input {
  @apply h-10 border mt-1 rounded px-4 w-full bg-gray-50 outline-none;
}
</style>