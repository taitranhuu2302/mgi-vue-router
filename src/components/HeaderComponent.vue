<script setup lang="ts"></script>

<template>
  <header>
    <nav
      class="w-full bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700"
    >
      <ul class="container mx-auto flex gap-2.5 items-center">
        <li>
          <router-link to="/" class="nav-link"> Home</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  @apply block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 p-2;
}
</style>
