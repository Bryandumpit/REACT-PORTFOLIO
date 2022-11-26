import React from 'react';
//
function Footer () {
    return (
        <footer className='container flex-row space-between'>
            <div>
                <a href='https://github.com/Bryandumpit' target='_blank' rel= 'noopener noreferrer'>
                    <img src={require('../../assets/logos/GitHub2.png')} alt='GitHub' className='logo'></img>
                </a>
                <a href='https://www.linkedin.com/in/bryan-dumpit-240b53113/' target='_blank' rel= 'noopener noreferrer'>
                    <img src={require('../../assets/logos/linkedin-logo.png')} alt='LinkedIn' className='logo'></img>
                </a>
                <a href='https://twitter.com/bryan_dumpit' target='_blank' rel= 'noopener noreferrer'>
                    <img src={require('../../assets/logos/twitter-logo.png')} alt='Twitter' className='logo'></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;