import { reactive } from 'vue'
import { useField } from '@/use/field'

export function useSearch(init = {}) {
  const search = reactive({})

  for (const [key, value] of Object.entries(init)) {
    search[key] = useField(value)
  }
  return search
}
