<template>
<div class="container mx-auto"> 
  <h1 class="font-bold text-center m-5 text-4xl">Etsi harrastuksesi helposti ja vaivattomasti</h1>
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
