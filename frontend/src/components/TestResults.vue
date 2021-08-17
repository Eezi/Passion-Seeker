<template>
<div class="container mx-auto"> 
    <header class="mb-10">
    <h1 class="text-2xl md:text-3xl mb-4 font-bold">Testitulokset</h1>
    <router-link @click="resetTestAnswers" to="/passion-test/question1" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Tee testi uudelleen</router-link>
    </header>
  <template v-if="loading">
    <p>Haetaan tuloksia...</p>
  </template>
  <template v-else-if="passions.length > 0">
  <!--<h6 v-if="passions[0].defaultValue" class="text-lg font-bold">Valitettavasti ei löytynyt yhtään sopivaa tulosta, mutta voisit pitää näistä.</h6>-->
  <div 
  class="shadow-md bg-gray-50 mb-8 w-auto md:max-w-xl mx-auto rounded px-6 shadow-md"
  v-for="passion in passions"
  :key="passion.key">
  <div class="border-l-4 border-red-400 -ml-6 pl-5 flex items-center justify-between my-auto">
        <div class="font-semibold text-gray-800">
          <h4 class="category text-gray-700 text-xxl">{{ passion.label }}</h4>
        </div>
        <!--<div class="text-red-400">Näe kaikki</div>-->
    </div>
     <hr class="-mx-6"/>
     <div
     v-for="subPassion in passion.subPassions" :key="subPassion.key"
     class="bg-gray-20 flex items-center justify-between my-4 border-b-2 border-fuchsia-600">
        <!--<div class="w-16">
        <img class="w-12 h-12 rounded-full" src="https://source.unsplash.com/50x50/?nature">
        </div>-->
        <div class="flex-1 pl-2">
      <h6 class="text-xl mx-3 my-3 font-bold" >{{ subPassion.label }}</h6>
        </div>
        <div class="text-red-400">
      <a target="_blank" :href="`http://www.google.com/search?q=${subPassion.label}`">
          <h6>Katso</h6>
      </a>
      </div>
    </div>
  </div>
  </template>
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
