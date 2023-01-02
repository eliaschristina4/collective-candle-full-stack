import './Footer.css';

export default function Footer(){
    return(
    <nav className='Footer'>
        
            
        <div className='footer-layer-1'>
            <ul className='site-links'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/shop'>Shop</a>
                </li>
                <li>
                    <a href='/contact'>Contact Us</a>
                </li>
            </ul>

            <ul className='socials'>
                <li>
                    <a href='https://www.facebook.com/'>
                        <img src='../../images/social-logos/facebook.png' alt='facebook icon' className='social-icon' />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/'>
                        <img src='../../images/social-logos/instagram.png' alt='facebook icon' className='social-icon' />
                    </a>
                </li>
                <li>
                    <a href='https://www.twitter.com/'>
                        <img src='../../images/social-logos/twitter.png' alt='twitter icon' className='social-icon' />
                    </a>
                </li>
            </ul>
        </div>

        <div className='footer-layer-2'>
                <a href='/' className='site-title'>
                    <img src='../../images/logos/logo-playfair-display.png' alt='collective candle co logo' id='footer-logo' />
                </a>
                <span id="copyright">&copy; 2023 All Rights Reserved</span>
        </div>
    </nav>
    )
}