import styles from '@/app/page.module.scss'
import Layout from '@/components/layout';

const Auth = ({children}) => {
    return(
        <Layout>
            <h1>Auth page</h1>
            <div>{children}</div>
        </Layout>
    )
}

export default Auth;