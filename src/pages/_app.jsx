"use client";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "../components/layout";
import RootLayout from "@/app/layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary fallback={
        <Layout>
          <p>Something went worng</p>
        </Layout>
    }>
      <RootLayout>
        <Component {...pageProps}/>
      </RootLayout>
    </ErrorBoundary>
  )
}
 
export default MyApp