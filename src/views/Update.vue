<template>
  <div class="update">
    <h1>Update</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type a description here"
        required
      />
      <input
        type="text"
        v-model="post.image"
        placeholder="insert image link"
        required
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose Image
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button type="button" v-on:click="updatePost">Update post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Update",
  props: {
    post: Object,
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    updatePost() {
      console.log(this.post);

      postRef.doc(this.post.id).set({
        description: this.post.description,
        image: this.post.image,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style>
body {
  background-color: powderblue;
}
.update input {
  width: 40%;
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
img {
  width: 70%;
}
</style>