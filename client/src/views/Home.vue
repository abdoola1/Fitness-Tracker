<style>
body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

h1 {
  font-size: 26px;
  font-weight: 600;
  color: #2c3e5099;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

#app {
  max-width: 30em;
  margin: 1em auto;
}
</style>

<template>
  <div id="app">
  <h1>workout</h1>
  <v-select @search="fethOptions" filterable="false" :options="options"></v-select>
</div>
</template>


<script src="https://unpkg.com/vue@latest"></script>
<script src="https://unpkg.com/vue-select@latest"></script>

<script>

import { Game_Server } from "../models/Game";

export default {
  data: ()=>
  ({
    options: []

  }),
  methods:{
    fethOptions(search,loading){

    }
  }
}
</script>
