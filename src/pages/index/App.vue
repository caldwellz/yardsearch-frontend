<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to the TAPStats app."/>
  <ModalExample />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ModalExample from './components/ModalExample.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  , ModalExample
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
