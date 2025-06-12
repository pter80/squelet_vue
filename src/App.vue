<script setup>

import Head from './components/HeadView.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
        <h2 style="font-style: oblique">Current route path: {{ $route.fullPath }}</h2>

      
      
    </div>
    
  </header>
  <nav>
    <RouterLink to="/hello">Go to Hello</RouterLink>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/welcome">Welcome</RouterLink>
    <RouterLink to="/welcome_item">WelcomeItem</RouterLink>
  </nav>
  <main>
    <!-- Ici sera affiché un élément commun à toutes les pages -->
    <Head />
    <!-- Ici sera affiché les différentes pages du routing -->
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
