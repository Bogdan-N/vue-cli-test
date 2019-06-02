<template>
  <div class="welcomPage-1">
    <section class="block-A">
      <div>
        <button>ON section A</button>
      </div>
    </section>
    <section class="block-B" :class="{ 'active': someVAriable }">
      <div>
        <button>ON section B</button>
      </div>
    </section>
    <section class="block-C">
      <div>
        <button>ON section C</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'welcomPage',
  props: {
    msg: String
  },
  data () {
    return {
      someVAriable: false
    }
  },
  methods: {
    onScroll (event) {
      this.someVAriable = true
      event.preventDefault()
      // setTimeout(() => this.someVAriable = false, 3000);
    }
  },
  created: function () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
