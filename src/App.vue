<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import TopLoader from '@/components/ui/top-loader/TopLoader.vue'
</script>

<template>
  <TopLoader />
  <router-view />
  <Toaster position="top-right" />
</template>