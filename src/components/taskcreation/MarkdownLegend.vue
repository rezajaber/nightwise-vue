<script setup lang="ts">
import { Button } from "@/components/ui/button";

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
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-text-cursor-input"
          >
            <path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" />
            <path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" />
            <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
            <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
            <path d="M9 7v10" />
          </svg>
        </Button>
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
        <div class="grid gap-4 overflow-y-auto px-6">
          <div class="flex flex-col justify-between">
            <div class="grid gap-6">
              <div
                class="grid grid-cols-2 gap-2 text-center text-sm text-white sm:text-base"
              >
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  -- converts to —
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  ... converts to …
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  <- converts to ←
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  -> converts to →
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  (c) converts to ©
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  (r) converts to ®
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  (tm) converts to ™
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  (sm) converts to ℠
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  1/2 converts to ½
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  1/4 converts to ¼
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  3/4 converts to ¾
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  +/- converts to ±
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  != converts to ≠
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  << converts to «
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  >> converts to »
                </p>
                <p class="rounded-md bg-secondary px-2.5 py-1">
                  2*3 converts to 2×3
                </p>
                <p class="bg-secondary px-2.5 py-1">^2 converts to ²</p>
                <p class="bg-secondary px-2.5 py-1">^3 converts to ³</p>
              </div>

              <div class="grid gap-2 text-sm sm:text-base">
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  # to ####### convert to h1 to h6
                </p>
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  == your word == convert to
                  <span class="rounded-md bg-yellow-400 px-2 py-0.5 text-black"
                    >highlighted</span
                  >
                </p>
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  * , - or + converts to a bullet list
                </p>
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  > converts to BlockQuote
                </p>
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  ``` or ~~~~ converts to CodeBlock
                </p>
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  --- or ___ converts to a Horizontal Line
                </p>
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  ***word*** or ___word___ = <b>word</b>
                </p>
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  *word* or _word_ = <i>word</i>
                </p>
                <p
                  class="rounded-md bg-secondary px-2.5 py-1 text-center text-white"
                >
                  ~~word~~ = <s>word</s>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
