/* eslint-disable @next/next/no-title-in-document-head */
"use client";
import Header from './Header';
import utils from '@/app/layout.module.scss'
import { ErrorBoundary } from "react-error-boundary";
const Layout = ({children }) => {
    return(
        <ErrorBoundary fallback={
            <p>Something went worng</p>
        }>
            <>
                <Header></Header>
                <div className={`${utils.noMargin}`}>{children}</div>
            </>
        </ErrorBoundary>
    )
}

export default Layout;