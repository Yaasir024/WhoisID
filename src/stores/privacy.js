import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const privacyStore = defineStore('privacy', () => {
    const currentSection = ref("");

  return { currentSection }
})
