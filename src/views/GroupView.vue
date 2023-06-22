<template>
  <BaseLayout>
    <div class="p-4">
      <div class="text-2xl mb-3">Guruhlar ro'yxati</div>

      <div class="rounded-lg bg-white shadow-lg p-2">
        <table class="table-auto border w-full">
          <thead class="border-b font-bold uppercase text-left">
            <tr>
              <th class="px-6 py-4">ID</th>
              <th class="px-6 py-4">Name</th>
            </tr>
          </thead>

          <tbody>
            <tr class="border-b" :key="row.id" v-for="row in rows">
              <td class="px-6 py-4">{{ row["group.id"] }}</td>
              <td class="px-6 py-4">{{ row["group.name"] }}</td>
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

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ru-RU").format(new Date(date));
}

function formatMoney(amount: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "UZS",
  }).format(amount);
}
</script>
