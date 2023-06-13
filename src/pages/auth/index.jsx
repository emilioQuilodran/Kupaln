import styles from '@/app/page.module.scss'

const Auth = ({children}) => {
    return(
        <>
            <h1>Auth page</h1>
            <div>{children}</div>
        </>
    )
}

export default Auth;