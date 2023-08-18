import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import dataProjets from '../dataProjets'
import Slider from './Slider'

const ProjetDetails = () => {
    const { title } = useParams()
    const projet = dataProjets.find(item => item.title === title);

    const statsList = projet.stats.map((item) => (
        <li>{item}</li>
    ))

    const descriptionsList = projet.description.map((item) => (
        <p>{item}</p>
    ))

    return (
        <div>
            <Header title={'title'} logo={process.env.PUBLIC_URL + '../media/logo.webp'} className={'header'} />
            <div className="projetContainer">
                <figure>
                    <img className='backgroundProjet' src={`${process.env.PUBLIC_URL}../${projet.img}`} alt="" />
                    <figcaption className='projetTitle'>{projet.title}</figcaption>
                    <figcaption className='projetSlogan'>{projet.slogan}</figcaption>
                </figure>
                <div className='content paddingContainer'>
                    <ul>
                        {statsList}
                    </ul>
                    <div >
                        {descriptionsList}
                    </div>
                    <Slider 
                        data={projet.carousel}
                    />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ProjetDetails