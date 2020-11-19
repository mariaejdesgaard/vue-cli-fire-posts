<template>
  <div>
    <h2>Posts</h2>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <img :src="post.image" alt="" />
        <h3>{{ post.description }}</h3>
        <router-link :to="{ name: 'Update', params: { post: post } }">
          <button>Update</button>
        </router-link>
        <button type="button" v-on:click="deletepost(post.id)">Delete</button>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods:{
deletepost(id){
console.log(id);
postRef.doc(id).delete()
;}
  },

  firestore: {
    posts: postRef,
  },
};
</script>

<style>
.grid-container {
  display: flex;
  flex-wrap: wrap;
}

.grid-container img {
  width: 70%;
}
</style>