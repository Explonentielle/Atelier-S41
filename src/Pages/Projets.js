import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import dataProjets from '../dataProjets'
import ProjetCard from '../components/ProjetCard'

const Projets = () => {
  const projetsList = dataProjets.map((item, index) => (
    <ProjetCard
      item={item}
      key={index + item.title}
    />
  ))
  return (
    <div>
      <Header title={'title'} logo={process.env.PUBLIC_URL + 'media/logo.webp'} className={'header'} />
      <div className='padding generique'>
        <div className='projetsWrapper'>
          {projetsList}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Projets


