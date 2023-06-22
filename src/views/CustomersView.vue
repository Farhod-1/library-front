<template>
  <BaseLayout>
    <div class="p-4">
      <div class="text-2xl mb-3">Foydalanuchilar ro'yxati</div>
      <router-link to="/addcustomer">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Foydalanuvchi qo'shish
        </button>
      </router-link>

      <div class="rounded-lg bg-white shadow-lg p-2">
        <table class="table-auto border w-full">
          <thead class="border-b font-bold uppercase text-left">
            <tr>
              <th class="px-8 py-4">Ismi familyasi</th>
              <th class="px-6 py-4">Telefon raqami</th>
                <th class="px-6 py-4">Ijaraga olgan kitoblari</th>

          
            </tr>
          </thead>

          <tbody>
            <tr class="border-b" :key="row.id" v-for="row in rows">
              <td class="px-6 py-4">{{row.username }}</td>
              <td class="px-6 py-4">{{ row.phonenumber }}</td>
              <td class="px-6 py-4">{{ row.books }}</td>
              <td class="px-6 py-4">
                <router-link :to="'/customer/' + row.id">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Kitob berish
                  </button>
                </router-link>
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
import { computed } from "vue";
import { customers } from "@/api/groups";

const CustomersRequest = customers();
const rows = computed(() => CustomersRequest.data.value);

CustomersRequest.fetch();


</script>
