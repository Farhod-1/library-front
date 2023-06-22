<template>
  <BaseLayout>
    <div class="p-4">
      <div class="text-2xl mb-3">Kitoblar ro'yxati</div>
      <form class="m-4">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">

          <input v-model="input.message" type="search" id="default-search"
            class=" absolute bottom-1  right-1  h-5   block  p-4 pl-10 text-sm text-blue-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-purple-500 dark:bg-gray-300 dark:border-purple-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Kitoblarni qidirish" required>

          <button type="button" @click="handleSearch(input.message)"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

        </div>
      </form>
      <div>
        <router-link class="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/addbook">
          Kitob qo'shish
        </router-link>



      </div>

      <div class=" mt-4 rounded-lg bg-white shadow-lg p-2">

        <table class="table-auto border w-full">
          <thead class="border-b font-bold uppercase text-left">
            <tr>


              <th class="px-6 py-4">Kitob nomi</th>
              <th class="px-6 py-4">Muallif</th>

              <th class="px-6 py-4">Holati</th>
              <th class="px-6 py-4">Soni</th>
            </tr>
          </thead>

          <tbody>
            <tr class="border-b" :key="row.id" v-for="row in rows">

              <td class="px-6 py-4">{{ row.name }}</td>
              <td class="px-6 py-4">{{ row.author }}</td>
              <td class="px-6 py-4">{{ row.status }}</td>
              <td class="px-6 py-4">{{ row.numberOfBooks }}</td>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                O'zgartirish
              </button>
              <button @click="handleDelete(row.id)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                O'chirish

              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { Books } from "@/api/invoices";
import { computed, reactive } from "vue";
import useRequest from "@/api/useRequest";
import type { Book } from "@/types";

const handleDelete = async (id: string) => {
  const response = await DeletingRequest(id);
  if (response) {
    BooksRequest.fetch();
  }


};
const DeletingRequest = async (id: string) => {
  return await useRequest<Book>(() => ({
    url: `/books/${id}`,
    method: "DELETE",
  })).fetch();
}






const BooksRequest = Books();
BooksRequest.fetch();

const handleSearch = async (message: string) => {
  BooksRequest.fetch({
    params: {
      search: message,
    },
  });
};


const rows = computed(() => BooksRequest.data.value);



const input = reactive({
  message: "",
});
</script>
<style>
#default-search {
  width: 30vw;
}
</style>