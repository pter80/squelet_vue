<script setup>
import axios from 'axios'

import { ref, onMounted } from 'vue'

const info = ref("")
const allData = ref("")
const id=ref(1)
/*
defineProps({
  msg: {
    type: String,
    required: true,
  }
})
*/


function checkData() {
    axios
        .get('https://jsonplaceholder.typicode.com/posts/'+id.value)
        .then(response => {
          info.value = response
          console.log(response)
        })
    }

    function getAll() {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          allData.value = response
          console.log(response)
        })
    }


onMounted(() => {
  console.log(`The initial count is ${info.value}.`)
  axios
      .get('https://jsonplaceholder.typicode.com/posts/'+id.value)
      .then(response => {
        info.value = response
        console.log(response)
      })
  })

</script>

<template>

  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Vous avez créer un projet avec 
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    
  </div>
  <button @click="getAll">Lire tout</button>
  <input v-model="id" @change="checkData">
  
   <div>{{ info }}</div>
   
   <div v-for="data in allData.data">
      {{  data.userId  }}=>{{  data.id }}=>{{  data.title }}
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
