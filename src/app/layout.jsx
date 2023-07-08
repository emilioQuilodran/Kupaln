import utils from '@/app/layout.module.scss'
import { ErrorBoundary } from "react-error-boundary";
import ReactGA from 'react-ga'

const Layout = ({children }) => {
    ReactGA.initialize('G-WJ5BM2BHKS')
    ReactGA.pageview(window.location.pathname + window.location.search);
    return(
        <>
            <div>{children}</div>
        </>
    )
}

export default Layout;