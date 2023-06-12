"use client";
import RootLayout from '@/app/layout';
import Header from './Header';
import { ErrorBoundary } from "react-error-boundary";

const Layout = ({children }) => {
    return(
        <ErrorBoundary fallback={
            <p>Something went worng</p>
        }>
            <RootLayout>
                <Header></Header>
                {children}
            </RootLayout>
            
        </ErrorBoundary>
    )
}

export default Layout;