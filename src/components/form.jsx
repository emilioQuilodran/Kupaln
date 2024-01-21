import React, { useState } from 'react';
import styles from '../app/page.module.scss';
import utils from '../styles/utils.module.scss';
import axios from 'axios';

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
      const response = await axios.post('/api/send-email', { name, email, message });
      if (response.status === 200) {
        setSubmitSuccess(true);
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Error al enviar el correo electrónico');
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
          {submitError && (
            <><p style={{margin: '0'}}>{submitError}</p><p style={{margin: '0'}}>Si necesitas asistencia inmediata, puedes contactarnos a través de WhatsApp</p></>
          )}
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