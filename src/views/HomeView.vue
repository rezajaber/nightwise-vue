<script setup lang="ts">
import SearchTask from "../components/SearchTask.vue";
import OverdueTask from "../components/OverdueTask.vue";
import OntimeTask from "../components/OntimeTask.vue";
import ControlBar from "../components/ControlBar.vue";
import TaskTitle from "../components/TaskTitle.vue";
import ChronoTagger from "../components/ChronoTagger.vue";
import SubtextTask from "../components/SubtextTask.vue";
</script>

<template>
  <main class="mt-5 flex gap-8">
    <div class="w-fit">
      <SearchTask />
      <OverdueTask class="mt-7" />
      <OntimeTask class="mt-8" />
    </div>

    <div class="w-full">
      <ControlBar />
      <TaskTitle class="mt-7" />
      <ChronoTagger class="mt-7" />
      <SubtextTask class="mt-7" />
    </div>
  </main>
</template>
