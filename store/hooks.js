import { useRecoilState } from 'recoil'
import { urlItems } from './atoms'

const cloneIndex = (items, url) => ({
  clone: items.map((item) => ({ ...item })),
  index: items.findIndex((item) => item.url === url),
})

export const useAddItem = () => {
  const [items, setItems] = useRecoilState(urlItems)
  return (data) => {
    const { clone, index } = cloneIndex(items, data.url)
    if (index === -1) {
      setItems([...clone, { ...data }])
    }
  }
}
