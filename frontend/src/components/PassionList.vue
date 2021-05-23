<template>
  <div class="grid grid-cols-3 gap-4">
  <div 
  class="p-10 bg-blue-300 text-center bg-opacity-80 shadow-md rounded-md" 
  v-for="passion in passions"
  :key="passion.key">
    <p class="font-medium text-2xl">{{ passion.label }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Passion from "../types/passion";
export default defineComponent({
    props: {
        passions: {
            required: true,
            type: Array as PropType<Passion[]>
        }
    }
})
</script>

<style>
</style>
