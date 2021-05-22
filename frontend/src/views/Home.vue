<template>
<div class="container mx-auto"> 
  <h1 class="text-center m-6 text-4xl">Etsi harrastuksesi helposti ja vaivattomasti</h1>
  <CategoryList :categories="stateCategories" />
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { categories } from '../modules/categories';
import Category from '../types/category';
import CategoryList from '../components/CategoryList.vue';
import { useQuery, useResult } from '@vue/apollo-composable'
import { QUERY_GAME_PASSIONS } from '../graphql/queries';
 export default defineComponent({
  name: 'Home',
  components: { CategoryList },
  setup() {
  const { result } = useQuery(QUERY_GAME_PASSIONS)
    const gameHobbies = useResult(result, null, data => data.gamePassions)
    const stateCategories = ref<Category[]>([])
    return {
      stateCategories,
      gameHobbies
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
