<template  >
  <div class="relative flex justify-center">
  <div class="relative flex flex-col w-96 justify-center m-5 p-2 overflow-hidden">
    <div class="mt-5 bg-white p-4 border rounded border-gray-200 shadow-sm">
      <div class="login-form-title">Tizimga kirish</div>

      <div class="input-group pb-4">
        <label for="">Username</label>
        <input class="block w-full px-4 py-2 mt-3 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" v-model="form.username" type="text" required />
      </div>

      <div class="input-group  pb-4">
        <label for="">Parol</label>
        <input class="block mt-3 w-full px-4 py-2  text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" v-model="form.password" type="password" required />
      </div>



      <div class="bg-red-400 rounded p-2 px-4 text-white" v-if="loginRequest.error.value">
        {{ loginRequest.error.value.message }}
      </div>

      <div class="mt-4 text-center">
        <btn @click="handleSubmit" class="w-[300px]" :loading="loginRequest.loading.value">Kirish
        </btn>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Btn from "@/components/Btn.vue";
import useRequest from "@/api/useRequest";
import { useRouter } from "vue-router";
import { useAuth } from "@/stores/counter";
import type { UserData } from "@/types";

const form = reactive({
  username: "",
  password: "",

});

const loginRequest = useRequest<UserData>(() => ({
  url: "/auth/login",
  method: "POST",
  data: form,
}));

const router = useRouter();
const auth = useAuth();

const handleSubmit = async () => {
  const response = await loginRequest.fetch();

  if (response?.status === 201) {
    auth.saveLogin(response.data);

    await router.push("/");
  }
};
</script>









 <!-- <div class="input-group">
        <label for="">Kimsiz ?</label>
        <select v-model="form.role">
          <option value="STUDENT">O'quvchi</option>
          <option value="TEACHER">O'qtuvchi</option>
          <option value="PARENT">Ota-ona</option>
        </select>
      </div> -->