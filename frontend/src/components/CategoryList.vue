<template>
  <div class="grid grid-cols-3 gap-4">
  <div 
  class="p-12 bg-green-300 text-center bg-opacity-80 shadow-md rounded-md transform motion-safe:hover:scale-110" 
  v-for="cate in categories"
  :key="cate.key">
    <h5 class="text-2xl">{{ cate.label }}</h5>
  </div>
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