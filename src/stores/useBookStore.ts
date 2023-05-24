import { defineStore } from 'pinia'
import { BookType } from '@/types/Book'
import { computed, onMounted, ref } from 'vue'

export const useBookStore = defineStore('books', () => {
  const books = ref<BookType[]>([])

  const getBookByAuthor = computed(() => {
    return (authorId: number) => books.value.filter((book) => book.author === authorId)
  })

  onMounted(() => {
    books.value = localStorage.getItem('books')
      ? JSON.parse(localStorage.getItem('books') as string)
      : []
  })

  const addNewBook = (book: BookType) => {
    books.value = [book, ...books.value]
    updateDataLocal()
  }

  const updateDataLocal = () => {
    localStorage.setItem('books', JSON.stringify(books.value))
  }

  const onDeleteBook = (id: string) => {
    books.value = books.value.filter((item) => item.id !== id)
    updateDataLocal()
  }

  return { books, onDeleteBook, addNewBook, getBookByAuthor }
})
