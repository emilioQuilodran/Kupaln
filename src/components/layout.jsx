/* eslint-disable @next/next/no-title-in-document-head */
"use client";
import Header from './Header';
import utils from '@/app/layout.module.scss'
const Layout = ({children }) => {
    return(
        <>
            <Header></Header>
            <div className={`${utils.noMargin}`}>{children}</div>
        </>
    )
}

export default Layout;