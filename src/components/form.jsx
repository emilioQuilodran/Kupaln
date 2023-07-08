import styles from '../app/page.module.scss'
import utils from '../styles/utils.module.scss'

const Form = () => {

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("holaa")
    }

    return(
        <section id='subscribeForm' className={styles.subscribeForm}>
          <div className={utils.dartkShadow}>
            <h4>Contacto</h4>
            <p>Contanos que proyecto tenes o tus dudas y la brevedad nos estaremos poniendo en contacto con vos</p>
            <form onSubmit={handleSubmit} className={utils.contactForm}>
              <div style={{display: "flex", justifyContent: 'space-between', flexWrap: 'nowrap', width: '85%', gap: '5%' }}>
                <input type="text" name="name" id="name" placeholder='Nombre' className={utils.displayBlock} />
                <input type='text' id='email' name='email' placeholder='example@gmail.com' className={utils.displayBlock} />
              </div>
              <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje...' className={utils.displayBlock}></textarea>
              <button type='submit' className={styles.btn}>Enviar consulta</button>
            </form>
          </div>
        </section>
    )
}

export default Form;