import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsCategory from "../views/ProductsCategory.vue";
import ProductDetails from "../views/ProductDetails.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import CartPage from "../views/CartPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import HelpPage from "@/views/HelpPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import LocalSearch from "@/views/LocalSearch.vue";
import WhishList from "@/views/WhishList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/LogIn",
    name: "log_in",
    component: LogIn,
  },
  {
    path: "/SignUp",
    name: "sign_up",
    component: SignUp,
  },
  {
    path: "/yourcart",
    name: "cart_page",
    component: CartPage,
  },
  {
    path: "/Checkout",
    name: "check_out",
    component: CheckoutPage,
  },
  {
    path: "/products/:category/:title",
    name: "products",
    component: ProductsCategory,
  },
  {
    path: "/product_Details/:productid",
    name: "productDetails",
    component: ProductDetails,
  },
  {
    path: "/help",
    name: "help",
    component: HelpPage,
  },
  {
    path: "/search/:query",
    name: "search",
    component: SearchPage,
  },
  {
    path: "/local_search",
    name: "localsearch",
    component: LocalSearch,
  },
  {
    path: "/whishlist",
    name: "whishlist",
    component: WhishList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        ...savedPosition,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        behavior: "smooth",
      };
    }
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router;
