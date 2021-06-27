<template>
<div class="container mx-auto"> 
  <router-link to="/passion-test/question1" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Tee testi</router-link>
  <h1 class="font-bold text-center m-5 text-2xl md:text-4xl">Etsi harrastuksesi helposti ja vaivattomasti</h1>
  <CategoryList :categories="stateCategories" />
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { categories } from '../modules/categories';
import Category from '../types/category';
import CategoryList from '../components/CategoryList.vue';
 export default defineComponent({
  name: 'Home',
  components: { CategoryList },
  setup() {
    const stateCategories = ref<Category[]>([])
    return {
      stateCategories,
    }
  },
  
  methods: {
  },
  created() {
    this.stateCategories = categories;
    },
});
</script>

<style>
</style>
