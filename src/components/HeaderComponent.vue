<script setup lang="ts">

</script>

<template>
  <header>
    <nav
        class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start">
      <div class="flex container mx-auto flex-wrap items-center justify-between px-3">
        <div
            class="items-center flex"
        >
          <ul
              class="flex gap-2.5 items-center">
            <li>
              <router-link to="/"
                           class="nav-link">
                Home
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  @apply block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90;
}
</style>