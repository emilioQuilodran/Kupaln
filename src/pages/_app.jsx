"use client";
import utils from '@/app/layout.module.scss'
import Header from '../components/Header';
import Script from 'next/script'

const MyApp = ({ Component, pageProps }) => {
  return (
      <>
      {/**
       * <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-WJ5BM2BHKS"/>
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WJ5BM2BHKS', {
                page_path: window.location.pathname,
              });
            `,
            }}
        />
       */}
        
        <div className={`${utils.body} ${utils.noMargin}`}>
          <Header></Header>
          <Component {...pageProps}/>
        </div>
      </>
  )
}
 
export default MyApp