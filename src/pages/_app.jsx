"use client";
import utils from '@/app/layout.module.scss'
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
      <div className={`${utils.body} ${utils.noMargin}`}>
        <Header></Header>
        <Component {...pageProps}/>
      </div>
  )
}
 
export default MyApp