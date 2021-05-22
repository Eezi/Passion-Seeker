<template>
<div class="container mx-auto"> 
  <h1 class="text-center m-6 text-4xl">{{ label }}</h1>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { useQuery, useResult } from '@vue/apollo-composable'
//import { QUERY_GAME_PASSIONS } from '../graphql/queries';
 export default defineComponent({
  name: 'PassionCategory',
  props: ['categoryName', 'label'],
  components: { },
  setup() {
  },
  
  methods: {
    created() {
    }  
  },
});
</script>

<style>
</style>
