import './style.css'

import github from './../../img/icons/gitHub.svg';
import linkedin from './../../img/icons/linkedIn.svg';
import netlify from './../../img/icons/netlify.svg';
import twitter from './../../img/icons/twitter.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <ul className='social'>
                        <li className='social__item'>
                            <a href='https://github.com/antonkornilov-ua' rel='noreferrer' target='_blank'>
                                <img src={github} alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a
                                href='https://www.linkedin.com/in/anton-kornilov-b9296323a/'
                                rel='noreferrer'
                                target='_blank'>
                                <img src={linkedin} alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a
                                href='https://app.netlify.com/teams/antonkornilov-ua/sites'
                                rel='noreferrer'
                                target='_blank'>
                                <img src={netlify} alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='https://twitter.com/tomnookwashere' rel='noreferrer' target='_blank'>
                                <img src={twitter} alt='Link' />
                            </a>
                        </li>
                    </ul>
                    <div className='copyright'>
                        <p>© 2022 frontend-handmade</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
