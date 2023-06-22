
import BaseLayout from '@/components/layout/BaseLayout.vue';

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
              <td class="px-6 py-4">

                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Kitob berish
                </button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container p-5">



      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-bold text-lg " id="exampleModalLabel">Kitob Berish Formasi</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Boshlanish sanasi</label>
                  <input v-model="form.starting_date" type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Tugash sanasi</label>
                  <input v-model="form.ending_date" type="date" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Kitob soni</label>
                  <input v-model="form.number" type="number" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                  <label  class="form-label">Kitob holati</label>
                  <select v-model="form.status" type="text" required
                    class="block w-full px-4 py-2 mt-1 text-black-700 bg-white border rounded-md focus:border-blue-700 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    <option value=1>berildi</option>
                    <option value=0>qaytarildi</option>
                   
                  </select>

                </div>
                <button @click="handleAttach" type="button" class="btn btn-primary">Amalga oshirish</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Yopish</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </BaseLayout>
</template>
<script setup lang="ts">
import BaseLayout from '@/components/layout/BaseLayout.vue';
import { Books } from "@/api/invoices";
import { computed, reactive } from "vue";
import useRequest from "@/api/useRequest";
import type { AttachingBook} from "@/types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const form = reactive({
  customerId: "05adeb2f-4599-4cd1-911b-a214ff1e0ae5",
  bookId: "aa1fda57- 988f - 4426 - 96c2 - 56dce2614673",
  starting_date: "",
  ending_date: "",
  
  status: "",
  number: "",
});

const AttachRequest = useRequest<AttachingBook>(() => ({
  url: "/attaching",
  method: "POST",
  data: form,
}));

const handleAttach = async () => {
  AttachRequest.fetch();
};













const BooksRequest = Books();
const rows = computed(() => BooksRequest.data.value);

BooksRequest.fetch();






const input = reactive({
  message: "",
});
const handleSearch = async (message: string) => {
  BooksRequest.fetch({
    params: {
      search: message,
    },
  });
};



</script>
