import styles from './css/loader.module.css'

const LoadingSpinner = () => {
  return (
    <div className={`${styles.loadingContainer}`}>
      <div className={styles.loadingSpinner}></div>
    </div>
  )
}

export default LoadingSpinner
