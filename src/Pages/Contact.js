import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form';

const Contact = () => {

  return (
    <div>
      <Header title={'title'} logo={process.env.PUBLIC_URL + 'media/logo.webp'} className={'header'} />
      <div className='container generique paddingContainer'>
        <h1 className='title'>Contact</h1>
        <h3>Si vous avez un projet, ou pour tout renseignement, vous pouvez compléter le formulaire de contact ci-contre ou bien utiliser les coordonnées ci-dessous.</h3>
        <Form />
        <div className='mapContainer' >
          <div>
            <h1>Coordonnées</h1>
            <p><strong>Adresse :</strong><br />41, avenue Jean Moulin<br />31400 Toulouse</p>
            <p><strong>Téléphone :</strong><br />+33 6 17 75 29 10</p>
            <p><strong>E-mail :</strong><br /><a className='mail' href="mailto:agence.s41@gmail.com">agence.s41@gmail.com</a></p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.3421614567674!2d1.4407508999999996!3d43.5785889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb88fa07d161%3A0x1056a790649cfa6!2s41%20Av.%20Jean%20Moulin%2C%2031400%20Toulouse!5e0!3m2!1sfr!2sfr!4v1691493185635!5m2!1sfr!2sfr"
            width="400"
            height="300"
            style={{
              border: '0',
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact