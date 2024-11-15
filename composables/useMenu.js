import { ref } from 'vue'

export function useMenu() {
  const openMenu = ref(false)

  const toggleMenu = () => {
    openMenu.value = false
  }

  return { openMenu, toggleMenu }
}