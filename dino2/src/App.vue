<template>
<div id="app">
  <headerStuff></headerStuff>
  <main>
    <section id='profile-container'>
      <h2>Profiles</h2>
      <ul id='profiles'>
        <dinoCard v-for="profile in profiles" :key="profile.name" :profile="profile"></dinoCard>
      </ul>
    </section>
  </main>
  <footerStuff></footerStuff>
  <router-view/>
</div>
</template>

<script>
import profiles from '@/components/profiles'
export default {
  name: 'app',
  components:{
    dinoCard: profiles,
  },
  data() {
    return {
      profiles: [],
      apiURL: '../static/dinosaurs.json'
    }
  },
  mounted() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.profiles = response
        console.log(profiles);
      })
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0 30px 0 30px;
  padding: 0;
  font-family: sans-serif;
  color: #1B997A;
  display: grid;
  grid-template-rows: 15% 75% 10%;
}
main {
  grid-row: 2/3;
}

main section {
  padding: 0 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, x100%);
  grid-gap: 10px;
  margin: 0 auto;
  width: 50%;
}

small {
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}

p {
  font-size: .8rem;
}
</style>
