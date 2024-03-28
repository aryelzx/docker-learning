<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue'

const name = ref('')
const age = ref('')
const company = ref('')
const status = ref('')
const id = ref(0)

const emits = defineEmits(['addUser'])

const onSubmit = () => {
  let user = {
    name: name.value,
    age: age.value,
    company: company.value,
    status: status.value,
    id: id.value++
  }
  emits('addUser', user)
  console.log(user, 'user no user form')

  name.value = ''
  age.value = ''
  company.value = ''
  status.value = ''
}
</script>

<template>
  <form class="user-form" @submit.prevent="onSubmit">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="name" class="text-right"> Name </Label>
        <Input id="name" class="col-span-3" v-model="name" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="Age" class="text-right"> Age </Label>
        <Input id="age" class="col-span-3" type="number" v-model="age" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="Company" class="text-right"> Company </Label>
        <Input id="company" class="col-span-3" type="text" v-model="company" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="Status" class="text-right"> Status </Label>
        <select id="rating-status" v-model="status">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
    <div class="flex justify-end">
      <Button type="submit" class="bg-sky-700 text-white px-4 py-2 rounded-lg">
        Save changes
      </Button>
    </div>
  </form>
</template>
