<template>
  <section>
    <div class="welcomPage-1">
      <div class="block-A"></div>
      <div class="block-B"></div>
      <div class="block-C"></div>
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
    select () {}
  },
  beforeCreate () {
    // const w = window.innerWidth
    // const h = window.innerHeight
  }
}
</script>
