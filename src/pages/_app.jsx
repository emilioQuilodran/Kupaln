import ErrorBoundary from '@/components/ErrorBoundary'
 
const MyApp = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
 
export default MyApp