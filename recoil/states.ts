import { atom } from 'recoil'
import { IResult } from '../types/result'

export const movieState = atom<IResult[]>({
  key: 'movieState',
  default: [],
})
