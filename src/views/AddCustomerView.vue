<template>
    <BaseLayout>
        <div class="p-4">
            <div class="text-2xl mb-3">Foydalanuchilar ro'yxati</div>
            <div class="relative flex flex-col justify-center m-5 p-2 overflow-hidden">
                        <div class="w-full p-3 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
                            <h1 class="text-3xl font-semibold text-center text-primary">Foydalanuvchini royxatdan o'tkazish</h1>

                            <form class="mt-3">
                                <div>
                                    <label  class="block text-sm text-gray-800">Foydalanuvchining ism familyasi</label>
                                    <input  v-model="form.username" type="text" required
                                        class="block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                </div>
                                <div class="mt-3">
                                    <div>
                                        <label  class="block text-sm text-gray-800">Foydalanuvchi uchun parol</label>
                                        <input  v-model="form.password" type="password" required
                                            class="block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                    </div>
                                </div>
                                <div class="mt-3">
                                        <div>
                                            <label  class="block text-sm text-gray-800">Telefon raqami</label>
                                            <input  v-model="form.phonenumber" type="text" required
                                                class="block w-full px-4 py-2 mt-1 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                        </div>
                                    </div>

                                <div class="mt-6">
                                    <button
                                        @click="handleAdd"
                                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                        qo'shish
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

            <div class="rounded-lg bg-white shadow-lg p-2">
                <table class="table-auto border w-full">
                    <thead class="border-b font-bold uppercase text-left">
                        <tr>
                            <th class="px-8 py-4">Ismi familyasi</th>
                            <th class="px-6 py-4">Telefon raqami</th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr class="border-b" :key="row.id" v-for="row in rows">
                            <td class="px-6 py-4">{{ row.username }}</td>
                            <td class="px-6 py-4">{{ row.phonenumber }}</td>
                            <td class="px-6 py-4">

                            </td>



                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { computed, reactive } from "vue";
import { customers } from "@/api/groups";
import useRequest from "@/api/useRequest";
import type { Customer } from "@/types";




const CustomersRequest = customers();
const rows = computed(() => CustomersRequest.data.value);
const form = reactive({
    username: "",
    password: "",
    phonenumber: "",
});

const AddingCustomer = useRequest<Customer>(() => ({
    url: "/customers/add",
    method: "POST",
    data: form,
}));


const handleAdd = async () => {
    const response = await AddingCustomer.fetch();
    if (response?.status === 200) {
        CustomersRequest.fetch();
    }
        
    }

  




CustomersRequest.fetch();


</script>
