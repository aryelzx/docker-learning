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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Pencil, Trash } from 'lucide-vue-next'
import { defineProps } from 'vue'

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
</script>

<template>
  <Table :users="users">
    <TableCaption>A list of users.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Age</TableHead>
        <TableHead>Company</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in props.users" :key="user.name">
        <TableCell>{{ user.name }}</TableCell>
        <TableCell>{{ user.age }}</TableCell>
        <TableCell>{{ user.company }}</TableCell>
        <TableCell>{{ user.status }}</TableCell>
        <TableCell class="w-fit flex gap-3 opacity-60">
          <Dialog>
            <DialogTrigger>
              <Button variant="secondary" @click="() => console.log('clicou')">
                <Pencil />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <UserForm />
              <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
                <DialogDescription>
                  Edit the user's information. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button variant="secondary" @click="() => console.log('clicou')">
            <Trash />
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
