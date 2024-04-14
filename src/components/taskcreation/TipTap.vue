<script>
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";

export default {
  components: {
    EditorContent,
  },

  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  emits: ["update:modelValue"],

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.modelValue,
      editorProps: {
        attributes: {
          class:
            "mt-7 h-[22rem] overflow-scroll overflow-x-hidden no-scrollbar bg-secondary rounded-md py-2 px-4 text-primary caret-accent focus:outline-none",
        },
        transformPastedText(text) {
          return text.toUpperCase();
        },
      },
      extensions: [StarterKit, Highlight, Typography],
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      },
      content: `
       You can use MarkDown - Therefor press next to the Info-Button. Have Fun 🎉
      `,
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<template>
  <editor-content :editor="editor" />
</template>

<style>
/* Basic editor styles */
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
    list-style-type: disc;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1rem;
    font-weight: bold;
  }
  h5 {
    font-size: 0.83rem;
    font-weight: bold;
  }
  h6 {
    font-size: 0.67rem;
    font-weight: bold;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;

    border-color: rgb(185, 185, 185);
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }
}
</style>
