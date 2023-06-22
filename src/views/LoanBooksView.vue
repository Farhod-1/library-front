<template>
<BaseLayout>

    <div class="text-2xl mb-3">Ijaraga berilgan kitoblar ro'yxati</div>
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
        





</BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/components/layout/BaseLayout.vue';

</script>