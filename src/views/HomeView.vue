<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import CreateBookModal from '@/components/CreateBookModal.vue'
import { ref } from 'vue'

const openCreateBookModal = ref<boolean>(false)

const onErrorImage = (e: any) => {
  e.target.src =
    'https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg'
}
</script>

<template>
  <MainLayout>
    <div class="flex justify-end mb-5">
      <button @click="openCreateBookModal = true" class="p-2 bg-tertiary hover:bg-opacity-90 text-white rounded">
        Create new book
      </button>
    </div>
    <div
      class="shadow-md max-h-[556px] min-w-[800px] overflow-auto border-b border-gray-200 rounded-lg"
    >
      <table id="table-blogs" class="min-w-full divide-y divide-gray-200">
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
          <tr>
            <td class="w-[5%]">
              <div class="table-text">#123</div>
            </td>
            <td class="w-[15%]">
              <div class="table-text">Title</div>
            </td>
            <td class="w-[10%]">
              <div class="table-text">
                <img class="w-[70px] rounded h-[70px]" src="" alt="" @error="onErrorImage" />
              </div>
            </td>
            <td class="w-[20%]">
              <div class="table-text">Author</div>
            </td>
            <td class="w-[20%]">
              <div class="table-text">$500</div>
            </td>
            <td class="w-[15%]">
              <div class="table-text">Date</div>
            </td>
            <td class="w-[15%]">
              <div class="flex items-center gap-4">
                <button class="text-blue-500">
                  <i class="fas fa-info-square text-lg"></i>
                </button>
                <button class="text-red-500">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination flex gap-2.5">
      <button class="btn-pagi">
        <i class="fas fa-angle-double-left"></i>
      </button>
      <button class="btn-pagi">
        <i class="fas fa-caret-left"></i>
      </button>
      <div class="px-4 py-2 bg-tertiary font-semibold rounded border text-white">1</div>
      <button class="btn-pagi">
        <i class="fas fa-caret-right"></i>
      </button>
      <button class="btn-pagi">
        <i class="fas fa-angle-double-right"></i>
      </button>
      <select class="bg-white text-gray-700 outline-none rounded" id="select-per-page">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <p>items/page</p>
    </div>
  </MainLayout>
  <CreateBookModal v-model:open="openCreateBookModal" />
</template>

<style scoped>
#table-blogs tr th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider;
}

#table-blogs tr td {
  @apply px-6 py-4;
}

.pagination {
  @apply px-4 py-3 flex items-center justify-center;
}

.pagination .btn-pagi i {
  @apply text-gray-500;
}

.pagination .btn-pagi,
.pagination select {
  @apply px-4 py-2 rounded border;
}

.pagination .btn-pagi {
  @apply text-black bg-white hover:bg-slate-200;
}
</style>
