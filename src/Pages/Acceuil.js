import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';




const Acceuil = () => {
    return (
        <div className="Home">
           <Header title={'title'} logo={process.env.PUBLIC_URL + 'media/logo.webp'} className={'header'}/>
            <div className='background'></div>
           <div className='container'>
                <div className='herobaner'>
                     <img src={process.env.PUBLIC_URL + 'media/Acceuil/logo.webp'} alt="" />
                     <h1>Atelier s41</h1>
                     <p>Atelier d'architecture à Toulouse</p>
                </div>
                <div>
                    <ul className='hexaContainer'>
                        <li>
                            <img className="hexa" src={process.env.PUBLIC_URL + 'media/Acceuil/hexa1.webp'} alt="" />
                            <Button link={'/About'} width={'100%'} className={'button'} label={`L'atelier`} />
                        </li>
                        <li>
                            <img className="hexa" src={process.env.PUBLIC_URL + 'media/Acceuil/hexa2.webp'} alt="" />
                            <Button link={'/Projets'} width={'100%'} className={'button'} label={'Nos Projets'} />
                        </li>
                        <li>
                            <img className="hexa" src={process.env.PUBLIC_URL + 'media/Acceuil/hexa3.webp'} alt="" />
                            <Button link={'/Process'} width={'100%'} className={'button'} label={'Travailler avec son Architecte'} />
                        </li>
                    </ul>

                </div>
                 <Footer/>
           </div>
        </div>
    )
}

export default Acceuil