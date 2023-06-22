import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginPage from "@/views/LoginPage.vue";
import InvoiceView from "@/views/BooksView.vue";
import GroupView from "@/views/CustomersView.vue";
import AddBookView from "@/views/AddBookView.vue";
import AddCustomerView from "@/views/AddCustomerView.vue";
import BookAttachingView from "@/views/BookAttaching.vue";
import LoanBooksViewVue from "@/views/LoanBooksView.vue";
import AboutViewVue from "@/views/AboutView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/books",
      name: "invoices",
      component: InvoiceView,
    },
    {
      path: "/customers",
      name: "customers",
      component: GroupView,
    },
    {
      path: "/addcustomer",
      name: "addcustomer",
      component: AddCustomerView,
    },
    {
      path: "/addbook",
      name: "addbook",
      component: AddBookView,
    },
    {
      path: "/customer/:id",
      name: "bookattaching",
      component: BookAttachingView,

    },
    {
      path: "/loanbooks",
      name: "loanbook",
      component:LoanBooksViewVue,
    },

    {
      path: "/about",
      name: "about",
      component: AboutViewVue
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !localStorage.getItem("token")) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
