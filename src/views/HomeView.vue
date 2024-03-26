<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
<template>
  <main class="bg-zinc-700 w-full h-[100vh] flex items-center justify-center">
    <div class="bg-slate-100 h-[700px] w-[900px] rounded-lg">
      <h2 class="text-2xl m-3">Transactions</h2>
      <Button variant="secondary" @click="() => console.log('clicou')">Click Me</Button>
    </div>
  </main>
</template>
