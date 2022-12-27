import styles from '../styles/carousel.module.css'
import { useEffect, useState } from 'react'
import { Items } from './Items'
import { IResult } from '../types/result'
interface Props {
  results: Array<IResult>
}
export const Carousel = ({ results }: Props) => {
  const show = 4
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(results.length)

  useEffect(() => {
    setLength(results.length)
  }, [results.length])
  const next = () => {
    if (currentIndex < length - show) {
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
        {currentIndex < length - show && (
          <button onClick={next} className={styles.rightArrow}>
            &gt;
          </button>
        )}
        <div className={styles.carouselContentWrapper}>
          <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
            {results ? (
              results.map((movie) => <Items key={movie.id} movie={movie} />)
            ) : (
              <div className={styles.noResults}>No Results</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
