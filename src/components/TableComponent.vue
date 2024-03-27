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
import { Label } from '@/components/ui/label'
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
</script>

<template>
  <Table>
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
      <TableRow>
        <TableCell> Aryel Cordeiro Ramos Gonçalves</TableCell>
        <TableCell>21 years</TableCell>
        <TableCell>Instituto do câncer</TableCell>
        <TableCell> Active </TableCell>
        <TableCell class="w-fit flex gap-3 opacity-60">
          <Dialog>
            <DialogTrigger>
              <Button variant="secondary" @click="() => console.log('clicou')">
                <Pencil />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
                <DialogDescription>
                  Edit the user's information. Click save when you're done.
                </DialogDescription>
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
          <Button variant="secondary" @click="() => console.log('clicou')">
            <Trash />
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
