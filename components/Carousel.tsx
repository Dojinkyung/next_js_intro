import styles from '../styles/carousel.module.css'
import { useEffect, useState } from 'react'

export const Carousel = (props) => {
  const { children } = props
  const show = 4
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  useEffect(() => {
    setLength(children.length)
  }, [children.length])
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
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
