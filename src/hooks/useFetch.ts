import axios, { type AxiosInstance } from 'axios'
import { ref } from 'vue'

export const useFetch = (url: string, config?: AxiosInstance) => {
  const response = ref<any>(null)
  const error = ref<any>(null)
  const loading = ref<boolean>(false)

  const fetch = async () => {
    loading.value = true
    try {
      const result = await axios.request({ url, ...config })
      response.value = result.data
      loading.value = false
    } catch (ex) {
      error.value = ex
      loading.value = false
      console.error(ex)
    } finally {
      loading.value = false
    }
  }
  fetch()
  console.log(response.value)

  return { response, error, loading, fetch }
}
