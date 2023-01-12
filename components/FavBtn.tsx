import HeartSolidImage from '../public/heart-like-solid-svgrepo-com.svg'
import { useRecoilState } from 'recoil'
import { FavMovie } from '../recoil/states'
import store from 'store'
import { IResult } from '../types/result'
import styles from '../styles/favBtn.module.css'
interface Props {
  movie: IResult | undefined
}
export const FavBtn = ({ movie }: Props) => {
  const [, setFavSelect] = useRecoilState(FavMovie)
  if (movie !== undefined) {
    const handleEventBtn = (event: { stopPropagation: () => void }) => {
      event.stopPropagation()
      if (movie.fav === false) {
        movie.fav = true
        store.set('fav', [...store.get('fav'), movie])
        setFavSelect(store.get('fav'))
      } else {
        movie.fav = false
        store.set(
          'fav',
          [...store.get('fav')].filter((fav: IResult) => fav.id !== movie?.id),
        )
        setFavSelect(store.get('fav'))
      }
    }
    return (
      <button onClick={handleEventBtn} className={styles.favBTN}>
        <HeartSolidImage className={movie?.fav ? `${styles.fav}` : `${styles.heart}`} />
      </button>
    )
  }
  return (
    <button className={styles.favBTN}>
      <HeartSolidImage className={movie ? `${styles.fav}` : `${styles.heart}`} />
    </button>
  )
}
