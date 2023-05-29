<template>
  <div>
    <Products />
    <!-- <ShoppingCart /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCart from "@/components/Shoppingcart.vue";
import Products from "@/components/Products.vue";
export default {
  name: "Home",
  components: {
    Products,
    ShoppingCart,
  },
};
</script>
