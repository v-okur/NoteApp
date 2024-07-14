<script setup>
import { ref } from 'vue'
import Light from './components/icons/Light.vue'

const showingModal = ref(false)
const newNoteTitle = ref('')
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
    title: newNoteTitle.value,
    id: Math.floor(Math.random() * 1000000),
    date: date,
    text: newNoteText.value,
    backgroundColor: getRandomColor()
  })
  newNoteText.value = ''
  newNoteTitle.value = ''
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
        <input v-model="newNoteTitle" placeholder="Title" />
        <textarea
          v-model.trim="newNoteText"
          name="note"
          id="note"
          cols="10"
          rows="10"
          placeholder="Text"
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
          <p class="title">{{ note.title }}</p>
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
  max-width: 100%;
  max-height: 100%;
  font-family: 'Montserrat', cursive;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

svg {
  width: 500px;
  height: 500px;
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
  color: #f1f1f1;
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
  margin-right: 10px;
  margin-left: 10px;
}

.card .title {
  font-weight: 600;
  text-decoration: underline;
  font-size: 20px;
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
  height: 70%;
  background-color: rgb(255, 255, 255);
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
  background-color: #1f1f1f;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
  color: #1f1f1f;
  border: 1px solid #1f1f1f;
  background-color: #f1f1f1;
}

.modal p {
  color: rgb(255, 0, 81);
}

input,
textarea {
  resize: none;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.355);
  margin: 5px;
}
textarea:focus {
  outline: 1px solid rgba(0, 0, 0, 1);
  outline-offset: 0px;
}

input:focus {
  outline: 1px solid rgba(0, 0, 0, 1);
  outline-offset: 0px;
}
</style>
