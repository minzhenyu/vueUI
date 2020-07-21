<template>
  <div id="app">
		<div>
			{{this.$store.state.count}}
		</div>
      <h1>Active Links</h1>
      <ul>
        <li><router-link to="/">HelloWorld</router-link ></li>
        <li><router-link to="/todolist">/todolist</router-link></li>
        <li><router-link to="/header">/header</router-link></li>
        <li><router-link to="/try">/try</router-link></li>
        <li><router-link to="/ui">/ui</router-link></li>
      </ul>
      <router-view class="view" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
