import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjetCard = ({ item }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/Project/${item.title}`)
  }
  console.log(item.img)

  return (
      <figure onClick={handleClick} className='projetCardContainer'>
        <img src={process.env.PUBLIC_URL + item.img} alt="" />
        <figcaption>{item.title}</figcaption>
      </figure>
  );
};

export default ProjetCard;