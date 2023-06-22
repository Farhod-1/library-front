<template>
  <div class="sidebar-menu ">
    <router-link to="/customers">
      <img src="@/assets/img/people.png" />
      Kitobxonlar
    </router-link>

    <router-link to="/books">
      <img  src="@/assets/img/books.png" />
      Kitoblar
    </router-link>
     <router-link to="/loanbooks">
        <img src="@/assets/img/icons8-book-shelf-100.png" />
        Ijaraga Berilgan kitoblar
      </router-link>
      <router-link to="/about">
        <img src="@/assets/img/icons8-book-shelf-100.png" />
        Biz haqimizda  
      </router-link>
    
  </div>
</template>

<script lang="ts" setup></script>
