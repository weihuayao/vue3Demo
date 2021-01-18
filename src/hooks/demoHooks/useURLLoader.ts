import {ref} from 'vue'
import axios from 'axios'
function useURLLoader<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  axios.get(url).then((res) => {
    loading.value = false
    loaded.value = true
    result.value = res.data
  }).catch(e => {
    error.value = e
  });
  // 将这些ref 一一返回
  return {
    result,
    loading,
    error,
    loaded
  }
}

export default useURLLoader;
