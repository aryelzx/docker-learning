<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Plus, Search } from 'lucide-vue-next'
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
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right"> Name </Label>
              <Input id="name" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="Age" class="text-right"> Age </Label>
              <Input id="age" class="col-span-3" type="number" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="Company" class="text-right"> Company </Label>
              <Input id="company" class="col-span-3" type="text" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="Status" class="text-right"> Status </Label>
              <Input id="status" class="col-span-3" type="text" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit"> Save changes </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </header>
</template>
