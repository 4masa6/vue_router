<template>
  <div id="app">
    <HelloJSX />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HElloJSX'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloJSX
  }
}
</script>
