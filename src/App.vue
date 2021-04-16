<template>
  <div id="app">
    <textarea v-model="text" class="editor">aaa</textarea>
    <VueMarkdown class="markdown" :source="text"></VueMarkdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueMarkdown from "vue-markdown-render";

@Component({
  components: {
    VueMarkdown,
  },
})
export default class App extends Vue {
  private editorText = "";
  private readonly storageKey = "markdown_text";

  mounted(): void {
    this.text = localStorage.getItem(this.storageKey) ?? "";
  }

  set text(value: string) {
    this.editorText = value;
    localStorage.setItem(this.storageKey, value);
  }

  get text(): string {
    return this.editorText;
  }
}
</script>

<style>
#app {
  display: flex;
  align-content: center;
  justify-content: space-around;
}

.markdown,
.editor {
  width: 48%;
  min-height: 500px;
  border: 1px solid black;
}
</style>
