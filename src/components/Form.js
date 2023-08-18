import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import emailjs from 'emailjs-com';

const Form = () => {

    const [message, setMessage] = useState("");
    const [data, setData] = useState({
      nom: "",
      email: "",
      txt: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!data.nom || !data.email || !data.txt) {
        setMessage("Veuillez remplir tous les champs.");
        return;
      }
  
      if (!validateEmail(data.email)) {
        setMessage("Veuillez entrer une adresse e-mail valide.");
        return;
      }
  
      emailjs.sendForm('service_ssnws7k', 'template_c0lpwgq', e.target)
        .then((response) => {
          console.log('E-mail sent successfully:', response);
          setMessage("Votre message a été envoyé avec succès.");
        })
        .catch((error) => {
          console.error('E-mail sending failed:', error);
          setMessage("Une erreur s'est produite lors de l'envoi du message.");
        });
    };
  
    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
  
  return (
    <div>
         <form className='formulaire' onSubmit={handleSubmit}>
          <label>Nom(obligatoire)</label>
          <input
            type="text"
            name="nom"
            value={data.nom}
            onChange={handleChange}
            required
          />
          <label>E-mail(obligatoire)</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="txt"
            value={data.txt}
            onChange={handleChange}
            cols="30"
            rows="10"
            required
          ></textarea>
          <input className='button formButton' type="submit" value="Envoyer" />
        </form>
        {message && <p className={message.includes("succès") ? 'success' : 'error'}>{message}</p>}
    </div>
  )
}

export default Form