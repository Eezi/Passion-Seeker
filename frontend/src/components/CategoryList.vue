<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3 px-5">
  <div 
  class="category motion-safe:hover:scale-110 p-8 bg-green-300 text-center bg-opacity-80 shadow-md rounded-md" 
  v-for="cate in categories"
  :key="cate.key">
    <router-link 
     :to="{ name: 'PassionCategory', 
     params: { categoryName: cate.key, label: cate.label }}"
      class="font-medium text-2xl">{{ cate.label }}</router-link>
  </div>
  <router-view/>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Category from "../types/category";
export default defineComponent({
    props: {
        categories: {
            required: true,
            type: Array as PropType<Category[]>
        }
    }
})
</script>
<style scoped>
    .category:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>