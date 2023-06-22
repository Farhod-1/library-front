<template>
    <BaseLayout>
        <div class="p-4">

            <div>

                <div class="relative flex flex-col justify-center m-5 p-2 overflow-hidden">
                    <div class="w-full p-3 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
                        <h1 class="text-3xl font-semibold text-center text-primary">Kitob qo'shish</h1>

                        <form class="mt-3">
                            <div>
                                <label class="block text-sm text-gray-800">Kitob nomi</label>
                                <input v-model="form.name" type="text" required
                                    class="block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                            </div>
                            <div class="mt-3">
                                <div>
                                    <label class="block text-sm text-gray-800">Muallif</label>
                                    <input v-model="form.author" type="text" required
                                        class="block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                </div>
                            </div>
                            <div class="mt-3">
                                <div>
                                    <label class="block text-sm text-gray-800">Holati</label>
                                    <select v-model="form.status" type="text" required 
                                        class="block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="NEW">Yangi</option>
                                        <option value="GOOD">Yaxshi</option>
                                        <option value="BAD">Yomon</option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="mt-3">
                                <div>
                                    <label class="block text-sm text-gray-800">Soni</label>
                                    <input v-model="form.numberOfBooks" type="text" required
                                        class="block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                </div>
                            </div>

                            <div class="mt-6">
                                <button @click="handleSubmit"
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                    qo'shish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
            <div class="text-2xl mb-3">Kitoblar ro'yxati</div>
            <div class="rounded-lg bg-white shadow-lg p-2">
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
                            <!-- <td class="px-6 py-4">{{ row.id }}</td> -->
                            <td class="px-6 py-4">{{ row.name }}</td>
                            <td class="px-6 py-4">{{ row.author }}</td>
                            <td class="px-6 py-4">{{ row.status }}</td>
                            <td class="px-6 py-4">{{ row.numberOfBooks }}</td>

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
import { computed } from "vue";
import { reactive } from "vue";
import type { Book } from "@/types";
import useRequest from "@/api/useRequest";

const form = reactive({
    name: "",
    author: "",
    status: "",
    numberOfBooks: "",

});


const AddingRequest = useRequest<Book>(() => ({
    url: "/books/add",
    method: "POST",
    data: form,
}));



const handleSubmit = async () => {
    console.log(form);

    const response = await AddingRequest.fetch();

    if (response?.status === 200) {
        BooksRequest.fetch();
    }



};











const BooksRequest = Books();
const rows = computed(() => BooksRequest.data.value);

BooksRequest.fetch();


</script>
