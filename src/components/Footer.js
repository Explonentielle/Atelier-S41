import React from 'react'
import Button from '../components/Button'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ copyright, className }) => {
  return (
        <div className='contact' >
          <div className='contactSlogan'>
              <h3>Vous avez un projet ?</h3>
              <p>Nous vous accompagnerons pour en faire une réalité.</p>
              <Button link={'/Contact'} className={'button'} label={'Contactez-nous'} />
          </div>
          <div className='contactLinks'>
              <p>Suivez-nous</p>
              <div>
                  <a href="https://www.linkedin.com/your-profile">
                      <FaLinkedin size={60} color='black' />
                  </a>
                  <a href="https://www.instagram.com/your-profile">
                      <FaInstagram size={60} color='black' />
                  </a>
              </div>
          </div>
        </div>
  );
};

export default Footer