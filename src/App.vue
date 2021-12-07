<template>
  <div id="app">
    <HelloWorld title="Composition API" msg="This is Composition API sample." />
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
