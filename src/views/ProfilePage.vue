<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl font-bold text-teal-800 dark:text-teal-50">Profile Settings</h1>
      <p class="text-gray-500 dark:text-gray-400">
        Manage your personal information and subscription plan.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <!-- Personal Details Section -->
      <div class="lg:col-span-2">
        <UCard
          variant="subtle"
          class="rounded-2xl glow-shadow hover-box-shadow bg-background/50 backdrop-blur-md"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold text-teal-800 dark:text-teal-50">
                Personal Details
              </h3>
              <UButton
                v-if="!isEditing"
                icon="i-lucide-pencil"
                color="primary"
                variant="ghost"
                @click="isEditing = true"
              >
                Edit
              </UButton>
              <div v-else class="flex gap-2">
                <UButton color="gray" variant="ghost" @click="cancelEdit">Cancel</UButton>
                <UButton color="primary" variant="solid" @click="saveDetails">Save</UButton>
              </div>
            </div>
          </template>

          <div class="flex flex-col gap-8 p-4">
            <!-- Profile Picture -->
            <div class="flex flex-col sm:flex-row items-center gap-6">
              <div class="relative group">
                <div
                  class="absolute -inset-1 bg-linear-to-r from-teal-400 to-emerald-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
                ></div>
                <img
                  src="https://avatar.iran.liara.r un/public/5"
                  alt="Profile Picture"
                  class="relative w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg"
                />
                <Ubutton
                  v-if="isEditing"
                  class="absolute bottom-0 right-0 p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors shadow-md"
                  title="Change Photo"
                >
                  <UIcon name="i-lucide-camera" class="w-5 h-5" />
                </Ubutton>
              </div>
              <div class="text-center sm:text-left">
                <h2 class="text-2xl font-bold text-teal-900 dark:text-white">{{ form.name }}</h2>
                <p class="text-gray-500 dark:text-gray-400">{{ form.email }}</p>
                <div v-if="isEditing" class="mt-2 text-sm text-teal-600 font-medium">
                  Editing Profile...
                </div>
              </div>
            </div>

            <UDivider />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <UFormGroup label="Full Name">
                <UInput
                  v-model="form.name"
                  :disabled="!isEditing"
                  size="xl"
                  icon="i-lucide-user"
                  class="w-full"
                />
              </UFormGroup>

              <UFormGroup label="Email Address">
                <UInput
                  v-model="form.email"
                  :disabled="!isEditing"
                  size="xl"
                  icon="i-lucide-mail"
                  class="w-full"
                />
              </UFormGroup>

              <UFormGroup label="Phone Number">
                <UInput
                  v-model="form.phone"
                  :disabled="!isEditing"
                  size="xl"
                  icon="i-lucide-phone"
                  class="w-full"
                />
              </UFormGroup>

              <UFormGroup label="Date of Birth">
                <UInput
                  v-model="form.dob"
                  type="date"
                  :disabled="!isEditing"
                  size="xl"
                  icon="i-lucide-calendar"
                  class="w-full"
                />
              </UFormGroup>

              <UFormGroup label="City">
                <UInput
                  v-model="form.city"
                  :disabled="!isEditing"
                  size="xl"
                  icon="i-lucide-map-pin"
                  class="w-full"
                />
              </UFormGroup>

              <UFormGroup label="Country">
                <UInput
                  v-model="form.country"
                  icon="i-lucide-globe"
                  :disabled="!isEditing"
                  size="xl"
                  class="w-full"
                />
              </UFormGroup>

              <UFormGroup label="Account Created">
                <UInput
                  v-model="form.createdDate"
                  disabled
                  size="xl"
                  icon="i-lucide-clock"
                  class="w-full"
                />
              </UFormGroup>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Subscription Section -->
      <div class="lg:col-span-1">
        <UCard
          variant="subtle"
          class="rounded-2xl glow-shadow hover-box-shadow h-full bg-linear-to-b from-teal-50/50 to-white/50 dark:from-teal-900/20 dark:to-gray-900/50"
        >
          <template #header>
            <h3 class="text-xl font-semibold text-teal-800 dark:text-teal-50">Subscription</h3>
          </template>

          <div class="flex flex-col gap-6 items-center text-center py-4">
            <div class="relative">
              <div class="absolute -inset-4 bg-teal-500/20 rounded-full blur-xl"></div>
              <UIcon
                name="i-lucide-crown"
                class="w-16 h-16 text-teal-600 dark:text-teal-400 relative"
              />
            </div>

            <div class="flex flex-col gap-2">
              <p class="text-sm text-gray-500 font-medium uppercase tracking-wider">Current Plan</p>
              <h2 class="text-3xl font-bold text-teal-900 dark:text-white">
                {{ subscription.plan }}
              </h2>
            </div>

            <!-- Pro Plus Logic -->
            <div v-if="subscription.plan === 'Pro Plus'" class="flex flex-col gap-2 w-full">
              <UBadge color="primary" variant="subtle" size="xl" class="justify-center py-2">
                Active
              </UBadge>
              <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Expires on: <span class="font-semibold">{{ subscription.expiryDate }}</span>
              </p>
            </div>

            <!-- Other Plans Logic -->
            <div v-else class="flex flex-col gap-3 w-full">
              <UButton size="xl" block color="primary" icon="i-lucide-zap"> Upgrade Plan </UButton>
              <p class="text-xs text-gray-500">Unlock more features with our Pro plans.</p>
            </div>

            <UDivider class="my-2" />

            <div class="w-full text-left flex flex-col gap-3">
              <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <UIcon name="i-lucide-check-circle-2" class="text-teal-500 w-4 h-4" />
                <span>Unlimited Projects</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <UIcon name="i-lucide-check-circle-2" class="text-teal-500 w-4 h-4" />
                <span>Priority Support</span>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const isEditing = ref(false)

// Initialize form with store data
// We use a watcher to update form if store changes externally or on mount if not ready
const form = reactive({ ...userStore.profile })

const subscription = userStore.subscription

const saveDetails = () => {
  // Update store
  userStore.updateProfile(form)
  isEditing.value = false
  console.log('Saved details:', form)
}

const cancelEdit = () => {
  // Revert changes from store
  Object.assign(form, userStore.profile)
  isEditing.value = false
}
</script>
