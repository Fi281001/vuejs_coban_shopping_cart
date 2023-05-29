<template>
    <div class="container">
      <!-- <div class="row mt-2 justify-content-center">
        <div class="col-2" v-for="product in products" :key="product.id">
          <div class="card" style="width: 10rem;">
            <img :src="product.url" class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">
                {{ product.name }} - $ {{ product.price }}
              </h6>
              <button
                @click="addProduct(product)"
                href="#"
                class="btn btn-success"
              >
                add
              </button>
            </div>
          </div>
        </div>
      </div> -->
      <div class="row mt-2">
        <table class="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in cart" :key="cart.id">
              <th scope="row">{{ index + 1 }}</th>
              <th scope="row">
                <img :src="cart.url" style="width: 4rem;" />
              </th>
              <td>{{ cart.name }}</td>
              <td>
                {{ cart.price }}
              </td>
              <td>
                <button
                  @click="decreaseQ(cart.id)"
                  class="btn btn-primary btn-sm"
                  v-if="cart.quantity > 1"
                >
                  -
                </button>
                {{ cart.quantity }}
                <button
                  @click="increaseQ(cart.id)"
                  class="btn btn-primary btn-sm"
                  size="sm"
                >
                  +
                </button>
              </td>
  
              <td>
                <button @click="removeProduct(cart.id)" class="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col text-center">
          <h4>TOTAL: {{ total }}</h4>
        </div>
        <div class="col text-center">
          <h4>Sum quantity: {{ sum }}</h4>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name: "ShoppingCart",
    setup() {
      const store = useStore();
      // function addProduct(p) {
      //   let cart = { ...p };
      //   console.log(">>>>>>",cart);
      //   store.dispatch("addProduct", cart);
      // }
      function removeProduct(id) {
        console.log(">>>>>>",id);
        store.dispatch("removeProduct", id);
      }
      function increaseQ(id) {
        console.log(">>>>>>",id);
        store.dispatch("increase", id);
      }
      function decreaseQ(id) {
        console.log(">>>>>>",id);
        store.dispatch("decrease", id);
      }
  
      return {
        //addProduct,
        increaseQ,
        removeProduct,
        decreaseQ,
        cart: computed(() => store.getters.getCart),
        products: computed(() => store.getters.getProducts),
        total: computed(() => store.getters.getTotal),
        sum: computed(() => store.getters.getSum),

      };
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>
  