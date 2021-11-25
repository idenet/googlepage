import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const urlItems = atom({
  key: 'urlItems',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
