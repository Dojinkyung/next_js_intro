import styles from '../styles/carousel.module.css'
import { useEffect, useState } from 'react'
import { Items } from './Items'
import { IResult } from '../types/result'
import useCarousel from '../service/useCarousel'
import { useRecoilState } from 'recoil'
import { windowState } from '../recoil/states'

interface Props {
  results: IResult[]
}
export const Carousel = ({ results }: Props) => {
  const [windowWidth] = useRecoilState(windowState)
  let show = 8
  const [currentIndex, setCurrentIndex] = useState(0)
  const [carouselMovie, setCarouselMovie] = useState<IResult[]>()
  const data = useCarousel(results)
  if (768 < windowWidth && windowWidth <= 878) {
    show = 6
  } else if (576 < windowWidth && windowWidth <= 768) {
    show = 4
  } else if (windowWidth <= 576) {
    show = 2
  }
  useEffect(() => {
    setCarouselMovie(data)
  }, [data])
  const next = () => {
    if (currentIndex < results?.length - show) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        {currentIndex > 0 && (
          <button onClick={prev} className={styles.leftArrow}>
            &lt;
          </button>
        )}
        {currentIndex < results?.length - show && (
          <button onClick={next} className={styles.rightArrow}>
            &gt;
          </button>
        )}
        <div className={styles.carouselContentWrapper}>
          <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
            {carouselMovie ? (
              carouselMovie.map((movie) => <Items key={movie.id} movie={movie} />)
            ) : (
              <div className={styles.noResults}>No Results</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
