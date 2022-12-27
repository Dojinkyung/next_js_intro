import { atom } from 'recoil'

export const searchState = atom<string>({
  key: 'searchState',
  default: '',
})
export const pageState = atom<number>({
  key: 'pageState',
  default: 1,
})
