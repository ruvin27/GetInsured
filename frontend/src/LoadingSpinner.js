import styles from './css/loader.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
    <div className={styles.loadingSpinner}> </div>
    <div className={styles.loadingText}>
      Please wait while we choose the best insurance for you
    </div>
  </div>
  
  )
}

export default LoadingSpinner
