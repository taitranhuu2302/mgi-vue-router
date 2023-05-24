<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { BookType } from '@/types/Book'
import { useRouter } from 'vue-router'
import { getAuthorName, onErrorImage } from '@/utils'
import MainLayout from '@/layouts/MainLayout.vue'

const bookDetail = ref<BookType>({
  author: 0,
  date: '',
  id: '',
  image: '',
  price: 0,
  slug: '',
  title: ''
})
const router = useRouter()

onMounted(() => {
  const { slug } = router.currentRoute.value.params
  const listBook: BookType[] = localStorage.getItem('books')
    ? JSON.parse(localStorage.getItem('books') as string)
    : []
  if (!listBook.length) return
  const book = listBook.find((item) => item.slug === slug)
  if (!book) {
    router.push('/error-page')
    return
  }
  bookDetail.value = { ...book }
})
</script>

<template>
  <MainLayout>
    <h2 class="text-3xl font-bold">{{ bookDetail.title }}</h2>
    <div class="flex gap-5 w-full mt-5">
      <img class="w-[200px] rounded" :src="bookDetail.image" @error="onErrorImage" alt="" />
      <div class="grid grid-cols-12 flex-grow">
        <div class="col-span-2">Price:</div>
        <div class="col-span-10">${{ bookDetail.price }}</div>
        <div class="col-span-2">Author:</div>
        <div class="col-span-10">{{ getAuthorName(bookDetail.author) }}</div>
        <div class="col-span-2">Date:</div>
        <div class="col-span-10">{{ bookDetail.date }}</div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped></style>