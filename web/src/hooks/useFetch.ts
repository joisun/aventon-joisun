import { ref, type UnwrapRef } from 'vue'

// D for request DataType , T for response 
export function useFetchPost<D = any, T = any>(url: string, postData: D) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  start()
  async function start() {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
    data,
    error,
    loading,
  }
}
