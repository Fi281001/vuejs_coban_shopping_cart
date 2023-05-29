<template>
      <div class="product">
        <div class="container">
         <!-- load loại sản phẩm -->
    <div style="margin-top: 10px;display:flex;flex-wrap:wrap;">
      <button className="btn btn-outline-dark me-2 w-2" style="width: 58px;" @click="filterProduct(0)" >ALL</button>
      <div :key="index" v-for="(cate,index) in category">
        <button className="btn btn-outline-dark me-2" @click="filterProduct(cate.id)" >{{ cate.name }}</button>
      </div>
    </div>   
  <h1>Products</h1>
  <router-link to="/cart" class="btn btn-outline-dark ms-2">
                <i className='fa fa-shopping-cart me-1'></i>Cart ({{ sum }})
            </router-link>
  <div style="display:flex;flex-wrap:wrap; margin-top: 20px;" >
    <!-- load sản danh sách sản phẩm -->
    <div :key="index" v-for="(product,index) in  products">
      <div class="container mt-3">
    <div class="card" style="width:300px">
      <img class="card-img-top" :src="product.img" alt="Card image" style="width:250px;height: 300px;margin-left: 18px;margin-top: 11px;">
      <div class="card-body">
        <h4 class="card-title"><strong>Price: </strong>{{ product.price }}$</h4>
        <p class="card-text"><strong>Status: </strong>{{ product.status }}</p>
        <p class="card-text"><strong>Name: </strong>{{product.name.substring(0,12)}}...</p>
        <!-- <router-link :to="{ name: 'product.detail' , params: {id: product.id}}"
        class="btn btn-outline-dark me-2">Buy Now</router-link> -->
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
  </div>
  </div>
  </div>
      </div>
    </template>
  <script>
    import { computed } from "vue";
  import { useStore } from "vuex";
  import axios from 'axios'
  export default {
    name: 'ProductList',
    components: {
    },
    data() {
      return {
        products: [],
        category: [],
        showproduct: [],
        pagination: {
           categoryId: null,
        },
        showPrevButton: true,
        selectedOption1: '',
        selectedOption2: ''
      }
    },
    created() {
      this.getProducts()
      this.getCategory()
    },
    setup() {
      const store = useStore();
      function addProduct(p) {
        let cart = { ...p };
        console.log(">>>>>>",cart);
        store.dispatch("addProduct", cart);
      }
  
      return {
        addProduct,
        sum: computed(() => store.getters.getSum),

      };
    },
    methods: {
      
      getProducts() {
        const params = {
           categoryId:  this.pagination.categoryId,
        };
  
        axios.get(`http://localhost:8000/book`, { params })
          .then(response => {
            this.products = response.data;
            
          })
          .catch(error => {
            console.error(error);
          });
      },
      getCategory() {
        axios.get("http://localhost:8000/categories")
          .then(res => {
            this.category = res.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      filterProduct(id) {
        if (id === 0) {
            this.pagination.categoryId =null; // Đặt categoryId thành null để lấy tất cả sản phẩm
            this.getProducts();
         } else {
            this.pagination.categoryId = id;
            this.getProducts();
      }
      },
    }
  }
  </script>