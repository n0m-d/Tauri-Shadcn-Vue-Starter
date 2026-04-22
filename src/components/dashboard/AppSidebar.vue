<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"

import {
  AudioWaveform,
  Bell,
  Bot,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-vue-next"
import NavMain from "@/components/NavMain.vue"
import NavUser from "@/components/NavUser.vue"
import TeamSwitcher from "@/components/TeamSwitcher.vue"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
    },
    {
      title: "Modals",
      url: "/modals",
      icon: Bot,
    },
    {
      title: "Authentication",
      url: "/login",
      icon: Bell,
    },
  ],
}
</script>

<template>
  <Sidebar 
    v-bind="props"
    class="transition-all duration-150 ease-in-out"
  >
    <SidebarHeader class="transition-all duration-100 ease-in-out">
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent class="transition-opacity duration-100 ease-in-out">
      <NavMain :items="data.navMain" />
    </SidebarContent>
    <SidebarFooter class="transition-all duration-100 ease-in-out">
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail class="transition-all duration-75 ease-in-out" />
  </Sidebar>
</template>
