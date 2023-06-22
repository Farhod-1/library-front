<template>
  <div class="navbar">
    <div class="flex-1"></div>
    <div>{{ authStore.user?.name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "@/stores/counter";

const authStore = useAuth();
</script>
