import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { AuthorType } from '@/types/Author'
import { LIST_AUTHOR } from '@/constant/Author'

export const useAuthorStore = defineStore('authors', () => {
  const authors = ref<AuthorType[]>(LIST_AUTHOR)

  const getAuthorById = computed(() => {
    return (authorId: number) => authors.value.find((author) => author.id === authorId)
  })

  return { authors, getAuthorById }
})
