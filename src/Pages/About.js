import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
       <Header title={'title'} logo={process.env.PUBLIC_URL + 'media/logo.webp'} className={'header'}/>
       <div className='container  generique paddingContainer'>
        <h1 className='title'>L’atelier</h1>
        <div className='aboutImg'>
          <h1>S41 est un atelier d’architecture fondé par Sylvain Lefranc, architecte DEHMONP, en 2019.</h1>
          <img className="hexa" src={process.env.PUBLIC_URL + 'media/Acceuil/hexa1.webp'} alt="" />
        </div>
        <p>L’atelier est installé à Toulouse. Nous travaillons principalement sur la région Occitanie, au grès des opportunités et des rencontres.

          L’atelier a posé ses valises dans le quartier Saint-Sernin, dans un espace de travail partagé avec d’autres professionnels de la construction, favorisant les échanges d’expériences et de savoir-faire que nous mettons au service de nos clients.</p>
        
        <h2>L’atelier vous accompagnera tout au long de votre projet dans le but partagé d’en faire une réalité.</h2>
        
        <p>L’atelier porte des valeurs qui infusent sur la conception de ses projets. Nous travaillons cependant toujours dans l’écoute et le respect de vos souhaits en y intégrant notre envie de créer des lieux de vie intenses, respectueux de l’Homme, de nos patrimoines et de notre planète.

          Un site, des besoins, des souhaits, des contraintes, des budgets, des personnalités… Trouver la meilleure alchimie qui puisse réunir l’ensemble de ces éléments est notre vision de l’architecture.</p>
       </div>
       <Footer/>
    </div>
  )
}

export default About