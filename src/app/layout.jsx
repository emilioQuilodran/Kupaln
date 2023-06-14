import utils from '@/app/layout.module.scss'
import { ErrorBoundary } from "react-error-boundary";

const Layout = ({children }) => {
    return(
        <div>{children}</div>
    )
}

export default Layout;