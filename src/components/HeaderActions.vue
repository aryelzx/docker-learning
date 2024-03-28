<script setup lang="ts">
import UserForm from '@/components/UserForm.vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Plus, Search } from 'lucide-vue-next'

type User = {
  name: string
  age: number
  company: string
  status: string
  id: number
}

const props = defineProps({
  users: Array as () => User[]
})

const handleAddUser = (user: User) => {
  props.users!.push(user)
  console.log(user)
}
</script>

<template>
  <header class="flex w-full justify-between">
    <div class="relative w-52 items-center pl-4 flex">
      <Input id="search" type="text" placeholder="Search..." class="pl-10 h-8" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-7">
        <Search class="size-4 text-muted-foreground" />
      </span>
    </div>
    <div class="mr-4">
      <Dialog>
        <DialogTrigger>
          <Button class="w-fit flex items-center gap-3 bg-sky-700">
            <Plus class="size-4" />
            Add User
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription> Insert a new user. Click save when you're done. </DialogDescription>
          </DialogHeader>
          <UserForm @addUser="handleAddUser" />
        </DialogContent>
      </Dialog>
    </div>
  </header>
</template>
