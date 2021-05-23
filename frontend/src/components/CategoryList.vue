<template>
  <div class="grid grid-cols-3 gap-4">
  <div 
  class="motion-safe:hover:scale-110 p-10 bg-green-300 text-center bg-opacity-80 shadow-md rounded-md" 
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