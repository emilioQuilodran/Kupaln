/* eslint-disable @next/next/no-title-in-document-head */
"use client";
import RootLayout from '@/app/layout';
import Header from './Header';
import { ErrorBoundary } from "react-error-boundary";
const Layout = ({children }) => {
    return(
        <ErrorBoundary fallback={
            <p>Something went worng</p>
        }>
            <>
                <Header></Header>
                {children}
            </>
        </ErrorBoundary>
    )
}

export default Layout;