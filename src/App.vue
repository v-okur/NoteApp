<script setup>
import TopBar from './components/TopBar.vue'
import { ref } from 'vue'

const showingModal = ref(false)
const newNoteText = ref('')
const notes = ref([])
const errorMessage = ref('')

const getRandomColor = () => {
  return 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
}

const addNote = () => {
  if (newNoteText.value.length < 10) {
    errorMessage.value = 'Note text must be 10 character or more'
    return
  }
  const date = new Date().toLocaleDateString('tr')
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    date: date,
    text: newNoteText.value,
    backgroundColor: getRandomColor()
  })
  newNoteText.value = ''
  showingModal.value = false
  errorMessage.value = ''
}

const closeModal = () => {
  errorMessage.value = ''
  showingModal.value = false
  newNoteText.value = ''
}
</script>
<template>
  <main>
    <div v-if="showingModal" class="overlay">
      <div class="modal">
        <textarea
          v-model.trim="newNoteText"
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="type some notes"
        ></textarea>
        <p v-if="errorMessage && newNoteText.length < 10">{{ errorMessage }}</p>
        <button @click="addNote">Add Note</button>
        <button @click="closeModal" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showingModal = true">+</button>
      </header>
      <div class="card-container">
        <div
          v-for="note in notes"
          :key="note.id"
          class="card"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+HR:wght@100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

main {
  width: 100vw;
  height: 100vw;
  max-width: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  max-width: 750px;
  padding: 10px;
  margin: 0 auto;
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

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(33.333% - 20px), 1fr));
}

.card {
  box-sizing: border-box;
  height: 225px;
  background-color: blueviolet;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-trim: 45px;
  margin-right: 10px;
  margin-left: 10px;
}

.date {
  font-size: 12px;
  font-weight: bold;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1f1f1f90;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 500px;
  background-color: wheat;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal > button {
  padding: 10px 20px;
  font-family: 'Montserrat';
  font-size: 16px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
  background-color: rgb(216, 56, 28);
}

.modal p {
  color: rgb(255, 0, 81);
}
</style>
