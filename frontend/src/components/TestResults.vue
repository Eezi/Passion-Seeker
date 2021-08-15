<template>
<div class="container mx-auto"> 
    <header class="mb-6">
    <h1 class="text-2xl md:text-3xl mb-4 font-bold">Testitulokset</h1>
    <router-link @click="resetTestAnswers" to="/passion-test/question1" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Tee testi uudelleen</router-link>
    </header>
  <template v-if="loading">
    <p>Haetaan tuloksia...</p>
  </template>
  <template v-else-if="passions.length > 0">
  <div 
  class="resultContainer shadow-2xl p-12 text-center bg-opacity-80 shadow-md rounded-md mb-4" 
  v-for="passion in passions"
  :key="passion.key">
    <h4 class="category text-gray-800	 text-xl">{{ passion.label }}</h4>
    <div class="resultContainer flex justify-center flex-wrap px-5">
    <div v-for="subPassion in passion.subPassions" :key="subPassion.key">
      <a target="_blank" :href="`http://www.google.com/search?q=${subPassion.label}`">
      <h6 class="subpassion text-lg shadow mx-3 my-3 font-bold" >{{ subPassion.label }}</h6>
      </a>
    </div>
    </div>
  </div>
  </template>
  <p v-else class="text-lg font-bold">Ei löytynyt yhtään vastauksia lol! Hävisit pelin :(</p>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable'
import { QUERY_RESULT_PASSIONS } from '../graphql/queries'
import Answer from '../types/answer';
 export default defineComponent({
  name: 'TestResults',
  props: {
      testAnswers: {
        type: Array,
        required: true
      },
      resetTestAnswers: {
        type: Function,
        required: true
      }
  },
  setup() {
    const questionAnswers = ref<Answer[]>([])
    const { result, loading } = useQuery(QUERY_RESULT_PASSIONS, { answers: questionAnswers })
    const passions = useResult(result, [], data => data.getTestResults)
    
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

<style scoped>
  .subpassion {
    background: #7400b8;
    border-radius: 4px;
    padding: 1rem 3rem;
  }
  .resultContainer {
    background: #fff;
    margin-bottom: 1.5rem;
    color: #fff;
  }
  .category {
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: .5rem;
  }
</style>
