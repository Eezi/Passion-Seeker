<template>
<div class="container mx-auto"> 
    <h1>Testitulokset</h1>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable'
import { QUERY_RESULT_PASSIONS } from '../graphql/queries'
import { useRoute } from 'vue-router'
 export default defineComponent({
  name: 'TestResults',
  props: {
      answers: {
        type: Array,
        required: true
      }
  },
  setup() {
    const route = useRoute()
    const { result, loading } = useQuery(QUERY_RESULT_PASSIONS, { answers: route.params.answers })
    const passions = useResult(result, null, data => data.answers)

    return {
      passions,
      loading,
    }
  },
  
   created() {
    const route = useRoute()
      console.log('answers', route.params.answers)
    }  ,
  methods: {
  },
});
</script>

<style>
</style>
