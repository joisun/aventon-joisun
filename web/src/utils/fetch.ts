export async function $fetchPost<D = any, T = any>(
  url: string,
  postData?: D,
  options: RequestInit = {},
): Promise<T> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: postData ? JSON.stringify(postData) : undefined,
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (e) {
    throw e instanceof Error ? e : new Error('An unknown error occurred')
  }
}
