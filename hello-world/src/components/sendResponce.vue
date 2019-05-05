<template>
  <div class="button">
    <button @click="send">{{someText}}</button>
    <pre>{{ result.name }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someText: "Send a request",
      result: ''
    };
  },
  methods: {
    send() {
      this.axios.get('http://localhost:3003/user')
      .then(response => {
        this.result = response.data;
        console.log('this.result ', this.result);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
};
</script>

<style>
.button {
  margin: 20px auto;
}
</style>
