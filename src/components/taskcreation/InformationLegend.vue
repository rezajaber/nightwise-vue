<script setup lang="ts">
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
</script>
<template>
  <div>
    <Dialog>
      <DialogTrigger as-child>
        <Button
          size="xs"
          class="gap-1.5 border-none bg-accent tracking-wide text-white"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-info"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" /></svg
        ></Button>
      </DialogTrigger>
      <DialogContent
        class="max-h-[90dvh] max-w-xs grid-rows-[auto_minmax(0,1fr)_auto] rounded-md p-0 sm:max-w-[425px]"
      >
        <DialogHeader class="p-6 pb-0">
          <DialogTitle>Information - Nightwise</DialogTitle>
          <DialogDescription
            >Below you can see what everything does and how it is suppose to
            work!</DialogDescription
          >
        </DialogHeader>
        <div class="grid gap-4 overflow-y-auto px-6 py-4">
          <div class="flex flex-col justify-between">
            <div class="grid gap-10">
              <!-- Search Input + Create Task-->
              <div class="grid gap-1.5">
                <p class="text-sm text-white opacity-60">
                  <b>Search</b> or <b>Create</b> a Task in your Tasklist:
                </p>
                <div class="flex gap-2">
                  <Input
                    placeholder="Search Task..."
                    class="h-8 w-full border border-accent text-primary caret-accent"
                  />
                  <Button
                    size="sm"
                    class="hidden cursor-default border-none bg-accent px-2.5 md:block"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-plus"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  </Button>
                </div>
              </div>

              <!-- Show/Hide Done + Sort by Prio -->
              <div class="flex justify-between gap-2">
                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Tasks</b>
                  </p>

                  <Button
                    size="sm"
                    class="w-full cursor-default border-none bg-accent text-white"
                    >Show/Hide Done</Button
                  >
                </div>

                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Sort</b> created Tasks
                  </p>
                  <Button
                    size="sm"
                    class="w-full cursor-default justify-evenly border-none bg-accent text-white"
                    >Priorities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-arrow-down"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" /></svg
                  ></Button>
                </div>
              </div>

              <!-- Create/Update Task + Finish Task + Delete Task -->
              <div class="flex justify-between gap-2">
                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Create</b> a Task <b></b>
                  </p>
                  <Button
                    size="xs"
                    class="cursor-default border-none bg-accent text-white"
                    >Create
                  </Button>
                </div>

                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Update </b> a Task
                  </p>
                  <Button
                    size="xs"
                    class="cursor-default border-none bg-accent text-white"
                    >Update
                  </Button>
                </div>
              </div>

              <!-- Create/Update Task + Finish Task + Delete Task -->
              <div class="flex justify-between gap-2">
                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Mark</b> as <b>Done</b>
                  </p>
                  <Button
                    size="xs"
                    class="cursor-default border-none bg-accent text-white"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-list-checks"
                    >
                      <path d="m3 17 2 2 4-4" />
                      <path d="m3 7 2 2 4-4" />
                      <path d="M13 6h8" />
                      <path d="M13 12h8" />
                      <path d="M13 18h8" /></svg
                  ></Button>
                </div>

                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Delete</b> a Task
                  </p>
                  <Button
                    size="xs"
                    class="cursor-default border-none bg-accent text-white"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-trash-2"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" /></svg
                  ></Button>
                </div>
              </div>

              <!-- Due Date for Task + Priority for Task -->
              <div class="flex items-start justify-between gap-2">
                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Pick</b> a <b>Due Date</b> for Task
                  </p>

                  <Button size="xs" class="cursor-default"
                    ><CalendarIcon
                      class="mr-2 h-4 w-4 text-white"
                    ></CalendarIcon
                    >Pick a Date</Button
                  >

                  <div class="mt-1 flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b91c1c"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-calendar-clock"
                    >
                      <path
                        d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
                      />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <path d="M3 10h5" />
                      <path d="M17.5 17.5 16 16.3V14" />
                      <circle cx="16" cy="16" r="6" />
                    </svg>
                    <p class="text-sm text-red-600 opacity-60">Task Overdue</p>
                  </div>
                </div>

                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Select</b> Task <b>Priority</b>
                  </p>

                  <Button class="cursor-default" size="xs"> Priority</Button>

                  <div class="mt-1 flex justify-evenly">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#379a6c"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-shield-check"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d5c453"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-shield-half"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      />
                      <path d="M12 22V2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#b91c1c"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-shield-alert"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-shield-x"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      />
                      <path d="m14.5 9.5-5 5" />
                      <path d="m9.5 9.5 5 5" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Pick Category + Edit Category -->
              <div class="flex justify-between gap-2">
                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Assign Category</b>
                  </p>
                  <Button class="cursor-default" size="xs">Category</Button>

                  <p class="text-center text-sm text-red-600 opacity-60">
                    Categories need to be created first via Edit!
                  </p>
                </div>

                <div class="grid w-full gap-1.5">
                  <p class="text-center text-sm text-white opacity-60">
                    <b>Edit Categories</b>
                  </p>

                  <Button class="cursor-default" size="xs">Edit</Button>

                  <p class="text-center text-sm text-red-600 opacity-60">
                    Categories that are in used can not be deleted!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
