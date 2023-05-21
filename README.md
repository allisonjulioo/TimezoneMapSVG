# Vue 3 + TypeScript + Vite

#### This project was builded with two architetures

1- Script setup [docs](https://vuejs.org/api/sfc-script-setup.html)

branch: `vue-script-setup`

```
<script setup>
// variable
const msg = 'Hello!'

// functions
function log() {
  console.log(msg)
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>
```
<hr/>

2- SFC Syntax Specification [docs](https://vuejs.org/api/sfc-spec.html)

branch: `vue-context-this`

```
<template>
 <div class="example">{{ msg }}</div>
</template>

<script>
export default {
 data() {
   return {
     msg: 'Hello world!'
   }
 }
}
</script>

<style>
.example {
 color: red;
}
</style>
```

# Running project

#### Install dependencies

`npm install`

#### Run local serve with hot reload

`npm run dev`

#### Run tests

`npm run test`
