import { selector } from 'recoil'
import { urlItems } from './atoms'

export const listState = selector({
  key: 'listState',
  get: ({ get }) => {
    const urllist = get(urlItems)
    return {
      urllist,
      listlength: urllist.length,
    }
  },
})
