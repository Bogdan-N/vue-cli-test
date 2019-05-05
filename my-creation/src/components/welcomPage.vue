<template>
  <section>
    <div class="first-page" style="wigth:300px; heigth: 500px;">
      <button>azaza</button>
      <router-link :to="{ name: 'childhood' }">Go to childhood</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'welcomPage',
  props: {
    msg: String
  },
  methods: {
    select () {

    }
  }
}
</script>
