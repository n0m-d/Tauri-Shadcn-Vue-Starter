<script setup lang="ts">
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'
import AppSidebar from '@/components/dashboard/AppSidebar.vue'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <router-view />
    </SidebarInset>
  </SidebarProvider>
</template>
