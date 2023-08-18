import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import missions from '../missions'

const Process = () => {
  const missionsList = missions.map((item) => {
    return (
      <Mission
        key={item.title}
        title={item.title}
        content={item.content}
      />
    )
  })
  return (
    <div>
      <Header title={'title'} logo={process.env.PUBLIC_URL + 'media/logo.webp'} className={'header'} />
      <div className='container  generique'>
        <h1 className='title'>Travailler avec son architecte</h1>
        <h1>Nos missions</h1>
        <p><strong>Les missions que nous réaliserons ensemble s’adaptent aux besoins et à l’échelle de votre projet. Les principales missions sont les suivantes.</strong></p>
        <div className='missionsContiner'>
          {missionsList}
        </div>
        <p>Les missions décrites ci-avant se définissent comme une « mission complète », assurant la conception et le suivi de la réalisation. </p>
        <p>Des missions partielles (conception uniquement) peuvent être conclues entre l’architecte et le maître d’ouvrage, le suivi de l’exécution étant confiée à un tier ou signer ultérieurement avec l’architecte par avenant au contrat.</p>
        <img className="" src={process.env.PUBLIC_URL + 'media/Process/rue-cugnaux.webp'} alt="" />
        <h1>Le travail en équipe</h1>
        <p>L’architecte ne travaille généralement pas seul, de nombreuses compétences ne faisant nécessairement pas parti de ses prérogatives. Aussi, pour mener à bien un projet, l’architecte travaille entre autres avec :</p>
        <ul>
          <li>Un géomètre pour le relevé du terrain.</li>
          <li>Un géotechnicien pour l’analyse des sols.</li>
          <li>Des bureaux d’études (structure, fluides, acoustique, thermique).</li>
          <li>Etc.</li>
        </ul>
        <img className="" src={process.env.PUBLIC_URL + 'media/Process/falgarde.webp'} alt="" />
        <h1>La rémunération des intervenants</h1>
        <p>
          La rémunération s’adapte en fonction de l’importance et du temps que l’équipe de maîtrise d’œuvre, chacun dans sa spécialité, consacrera à votre projet afin de pouvoir sereinement assurer le suivi des missions que vous nous aurez confiées.<br /><br />
          Nous avons l’habitude de proposer des forfaits au temps passé pour les phases de conception et des honoraires au pourcentage pour les suivis d’exécution des marchés de travaux.<br /><br />
          L’ensemble des points financiers et administratifs sont traités et négociés en toute transparence avant tout engagement. Un devis détaillé accompagné d’un contrat vous seront soumis.<br /><br />
          Notre engagement premier reste de vous assister jusqu’à l’aboutissement de votre projet.
        </p>
        <img className="" src={process.env.PUBLIC_URL + 'media/Process/rue-cugnaux1.webp'} alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default Process