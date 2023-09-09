<script lang="ts">
export default {
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = this.rotateY = this.rotateZ = 0;
    },
    async copy() {
      let text = `transform: ${this.box.transform};`;
      await navigator.clipboard.writeText(text);

      alert("Vue: CSS Copied to Clipboard");
    },
  },
  computed: {
    box() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
};
</script>

<template>
  <main>
    <section class="settings">
      <div class="settings-container">
        <label>perspective: {{ perspective }}px;</label>
        <input type="range" v-model="perspective" min="0" max="999" />

        <label>rotateX: {{ rotateX }}deg; </label>
        <input type="range" v-model="rotateX" min="-180" max="180" />

        <label>rotateY: {{ rotateY }}deg; </label>
        <input type="range" v-model="rotateY" min="-180" max="180" />

        <label>rotateZ: {{ rotateZ }}deg; </label>
        <input type="range" v-model="rotateZ" min="-180" max="180" />

        <button type="button" @click.prevent="reset">Reset</button>
        <button type="button" @click.prevent="copy">Copy</button>
      </div>
    </section>
    <section class="output">
      <div class="box-container">
        <div class="box" :style="box">
          <h3>Vue</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
h3 {
  font-size: 30px;
  font-weight: bold;
}

main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  max-width: 768px;
  margin: 0 auto;
  font-family: monospace, sans-serif;
  font-size: 22px;
}

main label {
  display: block;
}

main input[type="range"] {
  display: block;
  margin-bottom: 10px;
  width: 200px;
}

section.settings {
  width: 50%;
  z-index: 2;
}

.box-container {
  padding: 50px;
  border: 1px solid #8d81f3;
}

.box {
  width: 150px;
  height: 150px;
  background: #8d81f3;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: #8d81f3;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  outline: none;
  border: none;
  margin-right: 10px;
}

label {
  color: #fff;
}
</style>
