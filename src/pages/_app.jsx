"use client";
import { ErrorBoundary } from "react-error-boundary";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
 
export default MyApp