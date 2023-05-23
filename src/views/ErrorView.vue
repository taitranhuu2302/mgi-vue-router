<script setup lang="ts">

</script>

<template>
  <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
    <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl text-gray-400">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
        <p class="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <router-link to="/"
                     class="bg-blue-500 text-white px-8 py-3 font-semibold rounded">Back to homepage
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>