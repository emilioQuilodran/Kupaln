import styles from '@/app/page.module.scss'
import utils from "../../app/layout.module.scss"

const Auth = ({children}) => {
    return(
        <div  className={utils.noMargin}>
            <h1>Auth page</h1>
            <div>{children}</div>
        </div>
    )
}

export default Auth;