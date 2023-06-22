<template>
  <BaseLayout>
    <div class="p-4">
      <div class="text-2xl mb-3">To'lovlar ro'yxati</div>

      <div class="rounded-lg bg-white shadow-lg p-2">
        <table class="table-auto border w-full">
          <thead class="border-b font-bold uppercase text-left">
            <tr>
              <th class="px-6 py-4">ID</th>
              <th class="px-6 py-4">Guruh</th>
              <th class="px-6 py-4">Davr</th>
              <th class="px-6 py-4">To'lov summasi</th>
              <th class="px-6 py-4">To'lanishi kerak</th>
              <th class="px-6 py-4">To'lovlar</th>
            </tr>
          </thead>

          <tbody>
            <tr class="border-b" :key="row.id" v-for="row in rows">
              <td class="px-6 py-4">{{ row.id }}</td>
              <td class="px-6 py-4">{{ row.group_id }}</td>
              <td class="px-6 py-4">{{ row.period }}</td>
              <td class="px-6 py-4">
                {{ formatMoney(row.price_with_discount) }}
              </td>
              <td class="px-6 py-4" :class="{ 'text-red-700': row.unpaid > 0 }">
                {{ formatMoney(row.unpaid) }}
              </td>
              <td class="px-6 py-4">
                <div :key="payment.id" v-for="payment in row.payments">
                  <span class="text-green-700"
                    >+{{ formatMoney(payment.amount) }}</span
                  >
                  ({{ formatDate(payment.created_at) }})
                </div>
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
import { invoices } from "@/api/invoices";
import { computed } from "vue";

const invoicesRequest = invoices();
const rows = computed(() => invoicesRequest.data.value);

invoicesRequest.fetch();

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
