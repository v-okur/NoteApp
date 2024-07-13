<template>
  <header>
    <h1>Notes</h1>
    <button @click="showingModal = true">+</button>
  </header>
</template>

<script setup>
const props = defineProps({
  showingModal: {
    type: Boolean,
    required: true
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+HR:wght@100..400&display=swap');

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  color: aliceblue;
  background-color: #1f1f1f;
  border: none;
  border-radius: 25px;
  height: 45px;
  width: 45px;
}

h1 {
  font-weight: bold;
  color: #1f1f1f;
  font-family: 'Playwrite HR', cursive;
  margin-bottom: 25px;
  font-size: 60px;
}
header > button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #1f1f1f;
  border-radius: 100%;
  color: wheat;
  font-weight: bolder;
  font-size: 20px;
}
</style>
