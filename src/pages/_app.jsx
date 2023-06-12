"use client";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary fallback={
        <Layout>
            <p>Something went worng</p>
        </Layout>
    }>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
 
export default MyApp