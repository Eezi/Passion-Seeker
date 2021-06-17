<template>
    <div>
    <div v-if="url === 'results'">
      <test-results :testAnswers="questionAnswers" />
    </div>
    <div v-else>
      <p class="text-2xl font-bold">{{ stateQuestions.label }}</p>
    <ul>
      <li @click="handleAnserClick(answer.option)" class="answer max-w-lg h-13 mx-auto p-3 bg-blue-500 m-3 text-white rounded font-bold" v-for="(answer, key) in stateAnswers" :key="key">
        <strong> {{ answer.label }} </strong>
      </li>
    </ul>
    <div class="inline-flex">
  <button @click="handleNextAndPrev('prev')" class="bg-gray-300 hover:bg-gray-400 text-white-800 font-bold py-2 px-4 rounded-l">
    Edellinen
  </button>
  <button :disabled="disabled" @click="handleNextAndPrev('next')" class="stepButton bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r disabled:opacity-50">
    Seuraava
  </button>
</div>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { questions } from '../modules/questions';
import TestResults from '../components/TestResults.vue';
import Question from '../types/question';
import Answer from '../types/answer';
import { useRoute } from 'vue-router'
 export default defineComponent({
  name: 'PassionTest',
  components: { TestResults },
  setup() {
    const stateQuestions = ref<Question>()
    const stateAnswers = ref<Question>()
    const questionAnswers = reactive<Answer[]>([])
   
    return {
      stateQuestions,
      stateAnswers,
      questionAnswers,
    }
  },

  data: function() {
      const route = useRoute();
    return {
      pageIndex: 0,
      url: route.params.question,
      allAnswers: this.questionAnswers,
      currentStepAnswered: null,
    }
  },

  methods: {
    handleNextAndPrev: function(direction: string) {
      const questionKeys = questions.map(q => q.key);
      const hasCurrentStepAnswered = this.questionAnswers.find(q => q.question === this.$route.params.question);
      this.currentStepAnswered = hasCurrentStepAnswered;

      if (this.pageIndex === questions.length) {
        this.$router.push('/passion-test/results')
        return;
      }

      if (hasCurrentStepAnswered && direction === 'next') {
        this.pageIndex++
        return this.$router.push(`/passion-test/${questionKeys[this.pageIndex]}`)
      }
      if (direction === 'prev' && this.pageIndex > 0) {
        this.pageIndex--
        return this.$router.push(`/passion-test/${questionKeys[this.pageIndex]}`)
      }
    },
    handleAnserClick: function(answer: string) {
      const newAnswer = {
       question: this.$route.params.question,
       answer: answer
      };
      if (!this.questionAnswers.find(q => q.question === 'question7')) {
        this.questionAnswers.push(newAnswer)
      }
      this.handleNextPage();
    },

    handleNextPage: function() {
      const questionKeys = questions.map(q => q.key);

      if (this.pageIndex <= questionKeys.length) {
        this.pageIndex++;
      }

      if (this.pageIndex === questions.length) {
        this.$router.push('/passion-test/results')
        return;
      }
      
      this.$router.push(`/passion-test/${questionKeys[this.pageIndex]}`)
      const newQuestions = questions.find(q => q.key === questionKeys[this.pageIndex]);
      this.stateQuestions = newQuestions;
      this.stateAnswers = newQuestions?.answers; 
    }
  },
  computed: {
    disabled: function() {
      if (this.currentStepAnswered === null) {
        return true
      }
      return false
    }
  },
  created() {
    const route = useRoute();
    const correctQuestions = questions.find(question => question.key === route.params.question);
    this.stateQuestions = correctQuestions;
    this.stateAnswers = correctQuestions?.answers;
  },
  updated() {
    const route = useRoute();
    const correctQuestions = questions.find(question => question.key === route.params.question);
    this.stateQuestions = correctQuestions;
    this.url = route.params.question;
  }

});
</script>
<style scoped>
    .answer:hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .stepBottom:focus {
      outline: 0;
    }
</style>