"use client";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "@/components/layout";

const MyApp = ({ Component, pageProps }) => {
const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <ErrorBoundary fallback={
        <Layout>
          <p>Something went worng</p>
        </Layout>
    }>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ErrorBoundary>
  )
}
 
export default MyApp