<script setup lang="ts">
import HeaderActions from '@/components/HeaderActions.vue'
import Table from '@/components/TableComponent.vue'
import { ref } from 'vue'
type User = {
  name: string
  age: number
  company: string
  status: string
}

const users = ref([] as User[])
</script>
<template>
  <main class="bg-zinc-700 w-full h-[100vh] flex items-center justify-center">
    <div class="bg-slate-100 h-[700px] w-[900px] rounded-lg p-3">
      <h2 class="text-2xl m-4">Users</h2>
      <HeaderActions :users="users" />
      <Table :users="users" />
    </div>
  </main>
</template>
