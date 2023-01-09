import { atom } from 'recoil'
import { IResult } from '../types/result'

export const searchState = atom<string>({
  key: '#searchState',
  default: '',
})
export const pageState = atom<number>({
  key: '#pageState',
  default: 1,
})
export const FavMovie = atom<IResult[]>({
  key: '#favMovie',
  default: [] || store.get('fav'),
})
