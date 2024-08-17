import { ref, onMounted } from 'vue'

// handlePreferChange: {
//     (themeVal: 'light' | 'dark'): void
//   }
const isDark = ref(false)
export function useTheme() {
  const getCache = localStorage.getItem('isDark')
  const savedIsDark = getCache  === 'true' ? true : getCache === 'false' ? false : null
  setTheme( savedIsDark === null ? getSystemTheme() : savedIsDark)

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  // 设置主题 + 缓存
  function setTheme(val: boolean) {
    isDark.value = val
    localStorage.setItem('isDark', val.toString())
    document.documentElement.setAttribute(
      'data-theme',
      isDark.value ? 'dark' : 'light',
    )
  }

  //监听系统色修改
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      const isPreferDark = event.matches
      setTheme(isPreferDark)
    })  

  return {
    isDark,
    setTheme,
  }
}
