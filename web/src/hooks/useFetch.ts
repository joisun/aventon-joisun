// useFetchPost.ts
import { ref, type UnwrapRef } from 'vue'

export function useFetchPost<T = any>() {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  async function fetchPost<D = any>(url: string, postData: D): Promise<void> {
    loading.value = true
    error.value = null
    data.value = null

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      data.value = result as UnwrapRef<T>
    } catch (e) {
      error.value =
        e instanceof Error ? e : new Error('An unknown error occurred')
    } finally {
      loading.value = false
    }
  }

  return {
    fetchPost,
    data,
    error,
    loading,
  }
}
