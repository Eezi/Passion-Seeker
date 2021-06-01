<template>
    <div>
      <h3>{{ stateQuestions.label }}</h3>
    <ul>
      <li @click="handleAnserClick(answer)" class="answer max-w-lg h-11 mx-auto p-2 bg-green-400 m-3 text-white rounded" v-for="(answer, key) in stateAnswers" :key="key">
        <strong> {{ answer.label }} </strong>
      </li>
    </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, watchEffect } from 'vue';
import { questions } from '../modules/questions';
import Question from '../types/question';
import Answer from '../types/answer';
 export default defineComponent({
  name: 'PassionTest',
  components: {  },
  setup() {
    const stateQuestions = ref<Question>()
    const stateAnswers = ref<Question>()
    const questionAnswers = reactive<Answer[]>([])
    watchEffect(() => {
  // works for reactivity tracking
  console.log('questions', questionAnswers)
})
    return {
      stateQuestions,
      stateAnswers,
      questionAnswers,
    }
  },

  data: function() {
    return {
      //questionAnswers: []
    }
  },
   /* 
    Selvitä miten setup funktiossa pidetään tilaa 
    Selveitä miten vue router siirtää käyttäjän toiselle kysymykselle kun klikkaa vastausta
    Tarkista että tila päivittyy oikein kun kysymyksiin vastataan
   */
  methods: {
    handleAnserClick: function(answer: object) {
      this.questionAnswers.push(answer)

      console.log('miksä', this.stateQuestions.key)
     // console.log('next page', questions[nextQuestionIndex].key)
       const questionKeys = questions.map(q => q.key);
      const currentIndex = questionKeys.indexOf(this.stateQuestions.key);
      console.log('curr', questionKeys[currentIndex +1])
      
      this.$router.push(`/passion-test/${questionKeys[currentIndex +1]}`)
    },
    handleNextPage: function() {
    
    }
  },
  computed: {
  },
  created() {
    const correctQuestions = questions.find(question => question.key === this.$route.params.question);
    this.stateQuestions = correctQuestions;
    this.stateAnswers = correctQuestions?.answers;
    console.log('state', this.stateQuestions)
  },

});
</script>
<style scoped>
    .answer:hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>