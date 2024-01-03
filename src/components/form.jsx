import React, { useState } from 'react';
import styles from '../app/page.module.scss';
import utils from '../styles/utils.module.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validar campos
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar formulario por correo electrónico
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario.');
      }

      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscribeForm" className={styles.subscribeForm}>
      <div className={utils.dartkShadow}>
        <h4>Contacto</h4>
        <p>Contanos qué proyecto tenés o tus dudas y a la brevedad nos estaremos poniendo en contacto con vos.</p>
        <form onSubmit={handleSubmit} className={utils.contactForm}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
              width: '85%',
              gap: '5%',
            }}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              className={utils.displayBlock}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className={utils.displayBlock}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Mensaje..."
            className={utils.displayBlock}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {submitError && <p>{submitError}</p>}
          {submitSuccess && <p>Mensaje enviado correctamente.</p>}
          <button type="submit" className={styles.btn} disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;