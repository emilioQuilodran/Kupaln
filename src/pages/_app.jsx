"use client";
import utils from '@/app/layout.module.scss'
import Header from '../components/Header';
import { useEffect } from 'react';
import { initGA, logPageView } from '@/libs/analytics';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
      <div className={`${utils.body} ${utils.noMargin}`}>
        <Header></Header>
        <Component {...pageProps}/>
      </div>
  )
}
 
export default MyApp