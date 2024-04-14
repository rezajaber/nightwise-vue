<script setup lang="ts">
import Base from "@/lib/api/base";
import Header from "@/components/NightwiseHeader.vue";
import TaskOverview from "@/components/TaskOverview.vue";
import TaskCreation from "@/components/TaskCreation.vue";

import { onMounted, ref } from "vue";

const loggedIn = ref(false);

onMounted(() => {
  Base.getAuthStore().clear();
});

Base.getAuthStore().onChange(() => {
  loggedIn.value = Base.getAuthStore().isValid;
}, true);
</script>

<template>
  <Header />

  <main v-if="loggedIn" class="grid gap-4 md:flex md:gap-6">
    <TaskOverview class="h-fit w-full md:h-auto lg:w-fit" />
    <TaskCreation class="w-full md:h-auto lg:w-[32rem] xl:w-[40rem]" />
  </main>
</template>
