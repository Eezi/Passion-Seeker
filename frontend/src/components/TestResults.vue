<template>
<div class="container mx-auto"> 
    <h1>Testitulokset</h1>
  <div 
  class="p-8 bg-blue-300 text-center bg-opacity-80 shadow-md rounded-md" 
  v-for="passion in this.passions"
  :key="passion.key">
    <p class="font-medium text-2xl">{{ passion.label }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable'
import { QUERY_RESULT_PASSIONS } from '../graphql/queries'
import Answer from '../types/answer';
//import ResultPassion from '../types/passionResult';
 export default defineComponent({
  name: 'TestResults',
  props: {
      testAnswers: {
        type: Array,
        required: true
      }
  },
  setup() {
    const questionAnswers = ref<Answer[]>([])
    //let results = ref<ResultPassion[]>([])
    const { result, loading } = useQuery(QUERY_RESULT_PASSIONS, { answers: questionAnswers })
    const passions = useResult(result, null, data => data.getTestResults)
    
    return {
      loading,
      questionAnswers,
      passions,
    }
  },
  data () {
    return {
      userAnswers: this.testAnswers
    }
  },
  
   created() {
     this.questionAnswers = this.testAnswers
    }  ,
  methods: {
  },
});
</script>

<style>
</style>
