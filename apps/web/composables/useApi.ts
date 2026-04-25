export const useApi = () => {
  const config = useRuntimeConfig()

  const request = async <T>(path: string): Promise<T> => {
    return $fetch<T>(`${config.public.apiBase}${path}`)
  }

  return { request }
}
