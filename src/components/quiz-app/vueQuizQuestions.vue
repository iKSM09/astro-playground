<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar" :style="{ width: progressBar }"></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <transition-group name="fade">
      <div
        class="single-question"
        v-for="({ q: question, answers }, qIdx) in questions"
        v-show="questionsAnswered === qIdx"
        :key="question"
      >
        <div class="question">{{ question }}</div>
        <div class="answers">
          <div
            class="answer"
            v-for="{ text, is_correct } in answers"
            :key="text"
            @click.prevent="selectAnswer(is_correct)"
          >
            {{ text }}
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "VueQuizQuestions",
  props: ["questions", "questionsAnswered"],
  emits: ["ques-answered"],
  methods: {
    selectAnswer(is_correct) {
      this.$emit("ques-answered", is_correct);
    },
  },
  computed: {
    progressBar() {
      return `${(this.questionsAnswered / this.questions.length) * 100}%`;
    },
  },
};
</script>
