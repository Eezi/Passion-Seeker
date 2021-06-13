<template>
    <div>
      <h3>{{ stateQuestions.label }}</h3>
    <ul>
      <li @click="handleAnserClick(answer.option)" class="answer max-w-lg h-13 mx-auto p-3 bg-green-400 m-3 text-white rounded" v-for="(answer, key) in stateAnswers" :key="key">
        <strong> {{ answer.label }} </strong>
      </li>
    </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
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
   
    return {
      stateQuestions,
      stateAnswers,
      questionAnswers,
    }
  },

  data: function() {
    return {
      pageIndex: 0,
      allAnswers: this.questionAnswers,
    }
  },

  methods: {
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
        const newList = []
        this.questionAnswers.forEach(element => {
          newList.push(element) 
        });
        console.log('mikäs', newList)
        this.$router.push({ name: 'TestResults', params: { answers: this.questionAnswers } })
        return;
      }
      
      this.$router.push(`/passion-test/${questionKeys[this.pageIndex]}`)
      const newQuestions = questions.find(q => q.key === questionKeys[this.pageIndex]);
      this.stateQuestions = newQuestions;
      this.stateAnswers = newQuestions?.answers; 
    }
  },
  computed: {
  },
  created() {
    const correctQuestions = questions.find(question => question.key === this.$route.params.question);
    this.stateQuestions = correctQuestions;
    this.stateAnswers = correctQuestions?.answers;
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