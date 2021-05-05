<template>
<div class="container mx-auto"> 
  <h1 class="text-center m-10 text-4xl">Etsi harrastuksesi helposti ja vaivattomasti</h1>
  <div class="grid grid-cols-3 gap-4">
  <div class="p-12 bg-green-300 text-center bg-opacity-80 shadow-md rounded-md transform motion-safe:hover:scale-110" v-for="cate in categories" :key="cate.key">
    <h5 class="text-2xl">{{ cate.label }}</h5>
  </div>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { categories } from './modules/categories';

interface Categories {
  key: string;
  label: string;
}

export default defineComponent({
  name: 'App',
  components: {},
  data: (): Categories => {
    return {
      key: '',
      label: ''
    }
  },
  methods: {
  },

  created() {
      console.log("created", categories)
      this.categories = categories;
    },
});
</script>

<style>
</style>
