<template>
<div class="container mx-auto"> 
  <p>dfsfsalkdfjglsdfgjsldjgskdjflöfjdsklf</p>
  <ul>
    <li v-for="hobbie in hobbies" :key="hobbie.label">
      {{ hobbie.label }}
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      hobbies: [
        { label: 'Shakki' },
        { label: 'Biljardi' },
        { label: 'Pingis' }
        ]
    }
  }
});
</script>

<style>
</style>
