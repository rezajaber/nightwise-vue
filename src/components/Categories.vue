<script setup lang="ts">
import { ref } from "vue";
import {
  TagsInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";

const modelValue = ref(["Apple", "Banana"]);
</script>

<template>
  <TagsInput v-model="modelValue" class="border-none px-5 py-0">
    <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
  </TagsInput>
</template>
