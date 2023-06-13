"use client";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "../components/layout";
import Head from 'next/head'
import utils from "@/app/layout.module.scss"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary fallback={
        <Layout>
          <p>Something went worng</p>
        </Layout>
    }>
      <Layout>
        <Head>
            <html lang='es' className={`${utils.body}`} />
            <title>Kupaln comercio exterior</title>
        </Head>
        <Component {...pageProps}/>
      </Layout>
    </ErrorBoundary>
  )
}
 
export default MyApp