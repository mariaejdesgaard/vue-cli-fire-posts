<template>
  <div class="create">
    <h1>Add items</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type an item here"
        required
      />
      <input
        type="text"
        v-model="post.image"
        placeholder="Choose image"
        required
      />
      <button type="button" v-on:click="createPost">Create item list</button>
    </form>
    <iframe
      src="https://giphy.com/embed/fAhOtxIzrTxyE"
      width="100%"
      height="250"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
  name: 'Create',
  data(){
    return {
      post: {
        description: '',
        image: null
      }
    }
  },
  methods:{
    triggerChooseImg () {
      this.$refs.fileInput.click()
    },
    previewImage() {
      const imageFile = this.$reft.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = event => {
        this.post.image = event.target.result
      }
      fileReader.readAsDataURL(imageFile)
    },
    createPost(){
    postRef.add(this.post)
    this.$router.push('/')
  }
}
}
</script>

<style>
body {
  background-color: powderblue;
}
.create input {
  width: 70%;
  padding: 15px;
  border-radius: 12px;
  margin: 10px;
  background-color: white;
  border: solid grey 1px;
}
button {
  width: 40%;
  margin: 20px;
  padding: 10px;
  background-color: blanchedalmond;
  border: solid grey 1px;
  border-radius: 15px;
}

article {
  padding: 10px;
}
</style>