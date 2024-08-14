import { ref, onMounted } from 'vue'

// handlePreferChange: {
//     (themeVal: 'light' | 'dark'): void
//   }
export function useTheme() {
  const savedIsDark = localStorage.getItem('isDark') === 'true' ? true : false
  // 如果有缓存偏好，就覆盖默认的系统偏好
  const isDark = ref<boolean>(savedIsDark || getSystemTheme())
  setTheme(isDark.value)
 

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
      // 触发 prefer 系统主题变化的回调
      // handlePreferChange(themeVal)
    })  

  return {
    isDark,
    setTheme,
  }
}
