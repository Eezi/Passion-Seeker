<template>
<div class="container mx-auto"> 
  <h1 class="text-center m-6 text-4xl">Etsi harrastuksesi helposti ja vaivattomasti</h1>
  <CategoryList :categories="stateCategories" />
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { categories } from './modules/categories';
import Category from './types/category';
import CategoryList from './components/CategoryList.vue';
import gql from 'graphql-tag';
import { watch } from '@vue/composition-api'
import { useQuery } from '@vue/apollo-composable'
//import { gamePassions } from './queries/Passions.gql';

 export default defineComponent({
  name: 'App',
  components: { CategoryList },
  pollo: {
    // Simple query that will update the 'hello' vue property
    gamePassions: gql`query {
      category
      key
      label
    }`,
  },
  setup() {
   const { result, loading, error } = useQuery(gql`
     query getUsers {
        passions {
          key
          label
          category
        }
      }
    `)

    watch(result, value => {
      console.log('result', result)
      console.log('value', value)
    })
    const stateCategories = ref<Category[]>([])
    return {
      stateCategories,
      result,
      loading, 
      error,
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
