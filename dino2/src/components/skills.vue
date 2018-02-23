<template>
  <ul id='listOfSkills' class='skills-list'>
    <li v-for="skill in skills" :key="skill">{{skill}}</li>
  </ul>
</template>
<script>
export default {
  name: 'listOfSkills',
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style >
  .skills-list {
    list-style: none;
  }
</style>
