<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ModeToggle from '@/components/dashboard/ModeToggle.vue'
import ThemeCustomizer from '@/components/dashboard/ThemeCustomizer.vue'
import Overview from '@/components/dashboard/Overview.vue'
import RecentSales from '@/components/dashboard/RecentSales.vue'
import DateRangePicker from '@/components/dashboard/DateRangePicker.vue'
import UserNav from '@/components/dashboard/UserNav.vue'
import Search from '@/components/dashboard/Search.vue'
import { ref, getCurrentInstance } from 'vue'
import { invoke } from "@tauri-apps/api/core"
const { $toast } = getCurrentInstance()?.appContext.config.globalProperties
const greetMsg = ref("")
const name = ref("")
const isLoading = ref(false)


async function greet() {
  if (!name.value) {
    $toast.error('Please enter a name')
    return
  }
  
  isLoading.value = true
  try {
    greetMsg.value = await invoke("greet", { name: name.value })
    $toast.success(`Greeting: ${greetMsg.value}`)
  } catch (error) {
    $toast.error('Failed to greet: ' + error.message)
  } finally {
    isLoading.value = false
  }
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
</script>

<template>
  <header
    class="flex h-14 shrink-0 items-center gap-2 border-b px-4 sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <SidebarTrigger class="-ml-1" />
    <Separator orientation="vertical" class="mr-2 h-4" />
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem class="hidden md:block">
          <BreadcrumbLink href="#">
            Tauri
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator class="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <div class="ml-auto flex items-center gap-4">
      <Search />
      <ThemeCustomizer />
      <ModeToggle />
      <UserNav />
    </div>
  </header>
  <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div class="flex items-center justify-between space-y-2 py-4">
      <h2 class="text-2xl font-bold tracking-tight">
        Dashboard
      </h2>
      <div class="flex items-center space-x-2">
        <DateRangePicker />
        <Button>Download</Button>
      </div>
    </div>
    <Tabs default-value="overview" class="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics" disabled>
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports" disabled>
          Reports
        </TabsTrigger>
        <TabsTrigger value="notifications" disabled>
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" class="space-y-4">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle class="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                $45,231.89
              </div>
              <p class="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle class="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                +2350
              </div>
              <p class="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle class="text-sm font-medium">
                Sales
              </CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                +12,234
              </div>
              <p class="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle class="text-sm font-medium">
                Active Now
              </CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">
                +573
              </div>
              <p class="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Overview class="col-span-4" />
          <Card class="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  
    <div class="mt-6 border-t pt-6">
      <!-- Greet Form with Toast -->
      <Card class="mb-6">
        <CardHeader>
          <CardTitle>Greet Example</CardTitle>
          <CardDescription>Example with async operation</CardDescription>
        </CardHeader>
        <CardContent>
          <form class="flex items-center gap-4" @submit.prevent="greet">
            <div class="flex-1">
               <input 
                id="name" 
                v-model="name"
                placeholder="Enter your name..." 
                class="w-full border rounded px-3 py-2" 
              />
            </div>
            <Button type="submit" :disabled="isLoading">
              <span v-if="isLoading" class="animate-spin mr-2">⟳</span>
              {{ isLoading ? 'Greeting...' : 'Greet' }}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
