import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react'
import Buttons from './Button';

const Header = ({ title, logo, className }) => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (key) => {
    navigate(key.key)
  };

  return (
    <header className={className}>
      <img onClick={() => navigate("/")} className='logo' src={logo} alt="" />
      <div className='menuContainer'>
        <Menu
          className={isMenuOpen ? 'OpenMenu' : window.innerWidth <= 1024 ? 'hidden' : 'menu'}
          mode={window.innerWidth <= 1024 ? 'verticale' : 'horizontal'}
          ref={menuRef}

        >

          {window.innerWidth <= 1024 && isMenuOpen ? (
            <Buttons className={'button headerBtn'} label={'Contactez-nous'} />
          ) : null}
          
          <Menu.Item key="/" onClick={handleMenuItemClick}>
            <p >Accueil</p>
          </Menu.Item>
          <Menu.Item key="/About" onClick={handleMenuItemClick}>
            <p >L'atelier</p>
          </Menu.Item>
          <Menu.Item key="/Projets" onClick={handleMenuItemClick}>
            <p >Nos Projets</p>
          </Menu.Item>
          <Menu.Item key="/Process" onClick={handleMenuItemClick}>
            <p >Travailler avec son architecte</p>
          </Menu.Item>
          <Menu.Item key="/Contact" onClick={handleMenuItemClick}>
            <p >Contact</p>
          </Menu.Item>
        </Menu>

        {window.innerWidth <= 1024 ? (
          <div className="burgerContainer">
            <Button
              className="burger"
              type="text"
              icon={<MenuOutlined />}
              onClick={toggleMenu}
            />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header