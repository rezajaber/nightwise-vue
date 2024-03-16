<script setup lang="ts">
import ControlBar from "./taskcreation/ControlBar.vue";
import TaskTitle from "./taskcreation/TaskTitle.vue";
import TaskSideInformation from "./taskcreation/TaskSideInformation.vue";
import TaskInformation from "./taskcreation/TaskInformation.vue";
</script>

<template>
  <div>
    <ControlBar />
    <TaskTitle class="mt-7" />
    <TaskSideInformation class="mt-7" />
    <TaskInformation class="mt-7" />
  </div>
</template>
