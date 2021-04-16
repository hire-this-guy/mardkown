<template>
  <div id="app">
    <textarea v-model="text" class="editor">aaa</textarea>
    <VueMarkdown class="markdown" :source="text"></VueMarkdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import VueMarkdown from 'vue-markdown-render';

@Component({
  components: {
    HelloWorld,
    VueMarkdown,
  }

})
export default class App extends Vue {
  public text = "";
}

</script>

<style>
#app {
  display:flex;
  align-content:center;
  justify-content:space-around;

}
.markdown,
.editor {
  width:48%;
  min-height: 500px;
  border:1px solid black;
}
</style>
