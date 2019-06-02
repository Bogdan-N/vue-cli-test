<template>
  <div class="welcomPage-1">
    <section class="block first">
      <div>
        <button>ON section A</button>
      </div>
    </section>
    <section class="block second">
      <div>
        <button>ON section B</button>
      </div>
    </section>
    <section class="block third">
      <div>
        <button>ON section C</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "welcomPage",
  props: {
    msg: String
  },
  data() {
    return {
      currentHeight: 0,
      someVAriable: false
    };
  },
  methods: {
    onScroll(event) {
      this.someVAriable = true;
      event.preventDefault();
    },
    setSectionsHeight(dynamicHeight) {
      const elements = document.getElementsByClassName("block");
      console.log("elements ", elements);
      for (let i = 0; i < elements.length; ++i) {
        elements[i].style.height = `${dynamicHeight}px`;
      }
    }
  },
  created: function() {
    window.addEventListener("scroll", this.onScroll);
  },
  mounted: function() {
    const currentHeight = window.innerHeight;
    console.log("currentHeight ", currentHeight);
    this.setSectionsHeight(currentHeight);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
