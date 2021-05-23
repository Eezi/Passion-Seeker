<template>
<div class="container mx-auto"> 
  <h1 class="font-bold text-center m-5 text-4xl">{{ label }}</h1>
  <p v-if="loading">Loading...</p>
  <PassionList :passions="passions" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable'
import { QUERY_PASSIONS } from '../graphql/queries'
import PassionList from '../components/PassionList.vue'
import { useRoute } from 'vue-router'
 export default defineComponent({
  name: 'PassionCategory',
  props: ['categoryName', 'label'],
  components: { PassionList },
  setup() {
    const route = useRoute()
    const { result, loading } = useQuery(QUERY_PASSIONS, { category: route.params.categoryName  })
    const passions = useResult(result, null, data => data.passions)

    return {
      passions,
      loading,
    }
  },

  data() {
    return {
      category: this.$route.params.categoryName
    }
  },


  
   created() {

      console.log('categoryname')
    }  ,
  methods: {
  },
});
</script>

<style>
</style>
