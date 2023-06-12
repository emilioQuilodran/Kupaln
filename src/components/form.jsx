import styles from '../app/page.module.css'
import utils from '../styles/utils.module.css'

const Form = () => {
    return(
        <section id='subscribeForm' className={styles.subscribeForm}>
          <div className={utils.dartkShadow}>
            <h4>Get early access today</h4>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form>
              <input type='text' placeholder='example@gmail.com'></input>
              <button className={styles.btn}>Get Started for free</button>
            </form>
          </div>
        </section>
    )
}

export default Form;