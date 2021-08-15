<template>
    <div class="px-6">
    <div v-if="url === 'results'">
      <test-results :resetTestAnswers="resetTestAnswers" :testAnswers="answers" />
    </div>
    <div v-else>
      <p class="text-xl mb-2 md:text-2xl font-bold">{{ stateQuestions.label }}</p>
      <p class="text-md mb-6 md:text-lg font-bold text-yellow-500">Voit valita useita vaihtoehtoja</p>
    <ul>
      <li @click="handleAnswerClick(answer.option)" :class="isSelected(answer.option)" class="answer max-w-lg h-13 mx-auto p-3 bg-blue-500 m-3 text-white rounded font-bold" v-for="(answer, key) in stateAnswers" :key="key">
        <strong> {{ answer.label }} </strong>
      </li>
    </ul>
    
  <p v-if="!hasNotAnswered" class="mb-2 text-red-600 text-base">Kysymykseen pitää vastata ensin</p> 
    <div class="inline-flex">
  <button @click="handleNextAndPrev('prev')" class="focus:outline-none bg-yellow-300 hover:bg-yellow-400 text-white-800 font-bold py-4 px-5 mr-3 rounded-xl">
    Edellinen
  </button>
  <button @click="handleNextAndPrev('next')" class="focus:outline-none bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-4 px-5 rounded-xl disabled:opacity-50">
    Seuraava
  </button>
  </div>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
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

    return {
      stateQuestions,
      stateAnswers,
    }
  },

  data: function() {
      const route = useRoute();
    return {
      hasNotAnswered: true as boolean,
      url: route.params.question,
      answers: [] as Answer[],
    }
  },

  methods: {
    handleNextAndPrev: function(direction: string) {
      const questionKeys = questions.map(q => q.key);

      const currentIndex = questionKeys.indexOf(this.$route.params.question.toString());

      if (this.hasAnswerForThisQuestion(direction)) {
        this.hasNotAnswered = false;
        return;
      }
      if (direction === 'prev' && currentIndex == 0) {
        return;
      }
      
      if (currentIndex === questionKeys.length - 1) {
        return this.$router.push(`/passion-test/results`)
      }

      if (direction === 'next') {
        this.$router.push(`/passion-test/${questionKeys[currentIndex + 1]}`)
        this.hasNotAnswered = true;
      }
       
      if (direction === 'prev') {
        this.$router.push(`/passion-test/${questionKeys[currentIndex - 1]}`)
      }
      const newQuestions = questions.find(q => q.key === questionKeys[currentIndex + 1]);
      this.stateQuestions = newQuestions;
      this.stateAnswers = newQuestions?.answers; 

    },
    hasAnswerForThisQuestion (direction: string) {
      if (!this.answers?.map(a => a.question)?.includes(this.url) && direction === 'next') {
        return true;
      }
      return false;
    },
    handleAnswerClick: function(answer: string) {
      const newAnswer = {
       question: this.$route.params.question,
       answer: answer
      };

      const alreadySelected = this.isSelected(newAnswer.answer);

      if (alreadySelected === 'notSelected') {
        this.answers.push(newAnswer)
      }

      if (alreadySelected === 'selected') {
        const index = this.answers.map(q => q.answer).indexOf(newAnswer.answer);
        this.answers.splice(index, 1);
      }
    },

    resetTestAnswers: function() {
      this.answers = [];
      this.handleCorrectQuestions();
    },
    isSelected(key: string) {
     const currentQuestions = this.answers.filter(q => q.question === this.url).map(c => c.answer);
     if (currentQuestions.includes(key)) {
       return 'selected';
     }
      return 'notSelected';
    },
    handleCorrectQuestions() {
    this.url = this.$route.params.question;
    const correctQuestions = questions.find(question => question.key === this.$route.params.question);
    this.stateQuestions = correctQuestions;
    this.stateAnswers = correctQuestions?.answers;
    }
  },

  created() {
    this.resetTestAnswers();
    this.$router.push(`/passion-test/question1`);
  },
  updated() {
    this.handleCorrectQuestions();
  }

});
</script>
<style scoped>
    .answer:hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .selected {
      outline: 4px solid rgb(255, 156, 26);
    }
    .notSelected {
      outline: none;
    }
    .warn {
      display: block;
    }
</style>