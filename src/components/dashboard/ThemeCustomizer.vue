<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useStorage } from '@vueuse/core'
import { Check, Paintbrush } from 'lucide-vue-next'
import { watch, onMounted } from 'vue'
import { cn } from '@/lib/utils'

const themes = [
  { name: 'Zinc', class: 'theme-zinc', color: 'bg-zinc-800' },
  { name: 'Red', class: 'theme-red', color: 'bg-red-500' },
  { name: 'Rose', class: 'theme-rose', color: 'bg-rose-500' },
  { name: 'Orange', class: 'theme-orange', color: 'bg-orange-500' },
  { name: 'Green', class: 'theme-green', color: 'bg-green-500' },
  { name: 'Blue', class: 'theme-blue', color: 'bg-blue-500' },
  { name: 'Yellow', class: 'theme-yellow', color: 'bg-yellow-500' },
  { name: 'Violet', class: 'theme-violet', color: 'bg-violet-500' },
]

const currentTheme = useStorage('theme-color', 'theme-zinc')

function setTheme(themeClass: string) {
  currentTheme.value = themeClass
}

watch(currentTheme, (newTheme) => {
  document.body.classList.remove(...themes.map((t) => t.class))
  document.body.classList.add(newTheme)
})

onMounted(() => {
  document.body.classList.add(currentTheme.value)
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <Paintbrush class="h-[1.2rem] w-[1.2rem]" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
        <DropdownMenuLabel>
            Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
      <DropdownMenuItem
        v-for="theme in themes"
        :key="theme.name"
        @click="setTheme(theme.class)"
        class="gap-2"
      >
        <div :class="cn('h-4 w-4 rounded-full', theme.color)" />
        <span class="flex-1">{{ theme.name }}</span>
        <Check
          v-if="currentTheme === theme.class"
          class="ml-auto h-4 w-4"
        />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
